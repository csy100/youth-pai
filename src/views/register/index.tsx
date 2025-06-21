import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

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
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Email')}</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={t('InputEmail')}
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Password')}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder={t('InputPassword')}
                  autoComplete="new-password"
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
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder={t('InputConfirmPassword')}
                  autoComplete="new-password"
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
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder={t('InputVerificationCode')}
                      required
                  />
                  <button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/80 whitespace-nowrap text-sm"
                  >
                      {t('SendCode')}
                  </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-300 ease-in-out"
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
    </div>
  );
}
