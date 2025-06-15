import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-800 p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
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
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入用户名或邮箱"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">密码</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="请输入密码"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
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
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <input type="checkbox" className="mr-2 rounded border-gray-300 dark:border-zinc-700" />
              记住我
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">忘记密码？</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400 text-white font-semibold transition-colors"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
}