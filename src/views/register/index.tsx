import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800">
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Y</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">创建 Youth Pai 账号</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">加入我们，开启你的新旅程</p>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">用户名</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="请输入用户名"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">邮箱地址</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="请输入邮箱地址"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder="请输入密码"
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">确认密码</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder="请再次输入密码"
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
            
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-500 dark:text-gray-300">我同意 <a className="font-medium text-orange-600 hover:underline dark:text-orange-500" href="#">服务条款</a></label>
                </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-300 ease-in-out"
            >
              注册
            </button>
          </form>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-950/50 px-6 py-4 border-t border-gray-200 dark:border-zinc-800 text-center rounded-b-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            已经有账号了？{' '}
            <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
