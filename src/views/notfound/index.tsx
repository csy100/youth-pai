import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-900">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl font-extrabold text-orange-600 md:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
          页面未找到
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          抱歉，我们找不到您要查找的页面。
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-3">
          <Link
            to="/home"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            返回首页
          </Link>
          {/* <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
            联系支持 <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}