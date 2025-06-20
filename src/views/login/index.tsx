import { useState } from "react";
import { Eye, EyeOff, Github, Chrome } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800">
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Y</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">登录到 Youth Pai</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">欢迎回来！请输入你的账号信息</p>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">用户名或邮箱</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="请输入用户名或邮箱"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  placeholder="请输入密码"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600 dark:text-gray-400">
                <input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300 dark:border-zinc-600 text-orange-600 focus:ring-orange-500" />
                记住我
              </label>
              <a href="#" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">忘记密码？</a>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-300 ease-in-out"
            >
              登录
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
            <span className="mx-4 flex-shrink text-xs text-gray-400 dark:text-gray-500">或通过以下方式登录</span>
            <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </button>
            <button className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
              <Chrome className="w-5 h-5 mr-2" />
              Google
            </button>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-950/50 px-6 py-4 border-t border-gray-200 dark:border-zinc-800 text-center rounded-b-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            还没有账号？{' '}
            <Link to="/register" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}