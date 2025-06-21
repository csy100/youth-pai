import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Sider from "@/components/sider";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sider />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-zinc-900">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  )
}