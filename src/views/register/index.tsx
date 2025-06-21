import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendEmail, register } from "@/services/auth";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const COOLDOWN_DURATION = 300; // 5 minutes in seconds

// --- Helper Functions ---
const validateEmail = (email: string): boolean => {
  return !!email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const validatePassword = (password: string, t: (key: string) => string): string => {
  if (!password || password.length < 8 || password.length > 128) {
    return t('PasswordLengthError');
  }
  if (!/^[!-~]+$/.test(password)) {
    return t('PasswordCharsError');
  }
  return "";
};


// --- Custom Hook for Verification Code ---
function useVerificationCode() {
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // On component mount, check for an existing cooldown in localStorage
    const cooldownEnd = localStorage.getItem('codeCooldownEnd');
    if (cooldownEnd) {
      const remainingTime = Math.round((parseInt(cooldownEnd, 10) - Date.now()) / 1000);
      if (remainingTime > 0) {
        setIsSending(true);
        setCountdown(remainingTime);
      } else {
        localStorage.removeItem('codeCooldownEnd');
      }
    }
  }, []);

  useEffect(() => {
    // Manages the countdown timer
    let timer: NodeJS.Timeout;

    if (isSending && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isSending && countdown <= 0) {
      // Countdown finished
      setIsSending(false);
      localStorage.removeItem('codeCooldownEnd');
    }

    // The cleanup function will be called when the component unmounts
    // or when the dependencies (isSending, countdown) change.
    return () => {
      // It's important to clear the interval to prevent memory leaks.
      // TypeScript might complain that `timer` could be unassigned,
      // but in the logic flow where an interval is set, `timer` will always have a value.
      clearInterval(timer);
    };
  }, [isSending, countdown]);

  const send = async (email: string) => {
    if (isSending) return;
    
    try {
      // Set sending state before the async call to give immediate feedback
      setIsSending(true);
      setCountdown(COOLDOWN_DURATION);

      await sendEmail({ email });
      
      // On success, set the cooldown in localStorage
      localStorage.setItem('codeCooldownEnd', (Date.now() + COOLDOWN_DURATION * 1000).toString());

    } catch (error) {
      // On failure, reset the state
      setIsSending(false); 
      setCountdown(0);
      localStorage.removeItem('codeCooldownEnd');
      throw error;
    }
  };

  return { isSending, countdown, sendVerificationCode: send };
}


// --- Register Component ---
export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirm: "",
    auth_code: "",
  });

  const { isSending, countdown, sendVerificationCode } = useVerificationCode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendCode = async () => {
    if (!validateEmail(formData.email)) {
      console.log(t('InvalidEmail'));
      toast.error(t('InvalidEmail'), { position: "top-center" });
      return;
    }
    try {
      await sendVerificationCode(formData.email);
      toast.success(t("VerificationCodeSentTitle"), {
        description: t("VerificationCodeSentDescription"),
        position: "top-center"
      });
    } catch (error) {
      toast.error((error as Error).message, { position: "top-center" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
        toast.error(t('InvalidEmail'), { position: "top-center" });
        return;
    }

    const passwordError = validatePassword(formData.password, t);
    if (passwordError) {
        toast.error(passwordError, { position: "top-center" });
        return;
    }

    if (formData.password !== formData.password_confirm) {
      toast.error(t('PasswordsDoNotMatch'), { position: "top-center" });
      return;
    }

    try {
      await register(formData);
      toast.success(t('RegistrationSuccess'), { position: "top-center" });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("注册请求失败:", error);
      toast.error(t('RegistrationFailed'), { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800 relative">
        <Link
          to="/home"
          className="absolute left-4 top-4 flex items-center gap-1 group text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 text-sm font-medium"
          title={t('BackHome')}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('BackHome')}</span>
        </Link>
        <div className="p-6 sm:p-8 pt-16">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Y</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('RegisterTitle')}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{t('RegisterSubtitle')}</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={t('InputEmail')}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Password')}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder={t('InputPassword')}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('ConfirmPassword')}</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder={t('InputConfirmPassword')}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('VerificationCode')}</label>
              <div className="flex gap-4">
                  <input
                      type="text"
                      name="auth_code"
                      value={formData.auth_code}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder={t('InputVerificationCode')}
                      required
                  />
                  <button
                      type="button"
                      onClick={handleSendCode}
                      disabled={isSending}
                      className="cursor-pointer px-4 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/80 whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      {isSending ? t('ResendAfter', { count: countdown }) : t('SendCode')}
                  </button>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-300 ease-in-out"
            >
              {t('RegisterButton')}
            </button>
          </form>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-950/50 px-6 py-4 border-t border-gray-200 dark:border-zinc-800 text-center rounded-b-xl">
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t('AlreadyHaveAccount')}{' '}
            <Link to="/login" className="text-lg ml-1 font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">
              {t('LoginLink')}
            </Link>
          </p>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
