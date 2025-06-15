import {
  HomeIcon,
  FireIcon,
  PlusCircleIcon,
  UserGroupIcon,
  BookOpenIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useSiderStore } from "@/stores/sider";
import { Link, useLocation } from "react-router-dom";

const mainMenu = [
  {
    icon: HomeIcon,
    label: "Home",
    to: "/home",
  },
  {
    icon: FireIcon,
    label: "Popular",
    to: "/popular",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    label: "Answers",
    to: "/answers",
    badge: "BETA",
  },
  {
    icon: BookOpenIcon,
    label: "Explore",
    to: "/explore",
  },
  {
    icon: UserGroupIcon,
    label: "All",
    to: "/all",
  },
];

export default function Sider() {
  const { collapsed } = useSiderStore();
  const location = useLocation();
  return (
    <aside className={`min-h-screen bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 flex flex-col py-4 transition-width duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* 主菜单：无论是否折叠都渲染 */}
      <nav className="flex flex-col gap-1 px-4">
        {mainMenu.map(item => (
          <SiderItem
            key={item.to}
            icon={<item.icon className={collapsed ? "w-6 h-6" : "w-5 h-5"} />}
            label={item.label}
            to={item.to}
            badge={item.badge}
            active={location.pathname === item.to}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* 其他内容：只在未折叠时显示 */}
      {!collapsed && (
        <>
          {/* 分割线 */}
          <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" />

          {/* 自定义分组 */}
          <div className="px-4 text-xs text-zinc-400 mb-2">CUSTOM FEEDS</div>
          <nav className="flex flex-col gap-1 px-4">
            <SiderItem
              icon={<PlusCircleIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Create a custom feed"
              to="/create-custom-feed"
              active={location.pathname === "/create-custom-feed"}
              collapsed={collapsed}
            />
          </nav>

          <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" />

          {/* 社区分组 */}
          <div className="px-4 text-xs text-zinc-400 mb-2">COMMUNITIES</div>
          <nav className="flex flex-col gap-1 px-4">
            <SiderItem
              icon={<BriefcaseIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="y/Bitcoin"
              to="/y-bitcoin"
              active={location.pathname === "/y-bitcoin"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<Cog6ToothIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="y/ChatGPT"
              to="/y-chatgpt"
              active={location.pathname === "/y-chatgpt"}
              collapsed={collapsed}
            />
          </nav>

          <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" />

          {/* 资源分组 */}
          <div className="px-4 text-xs text-zinc-400 mb-2">RESOURCES</div>
          <nav className="flex flex-col gap-1 px-4">
            <SiderItem
              icon={<InformationCircleIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="About Youth"
              to="/about-Youth"
              active={location.pathname === "/about-Youth"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<BriefcaseIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Advertise"
              to="/advertise"
              active={location.pathname === "/advertise"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<BookOpenIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Youth Pro"
              badge="BETA"
              to="/Youth-pro"
              active={location.pathname === "/Youth-pro"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<ChatBubbleLeftRightIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Help"
              to="/help"
              active={location.pathname === "/help"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<BookOpenIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Blog"
              to="/blog"
              active={location.pathname === "/blog"}
              collapsed={collapsed}
            />
            <SiderItem
              icon={<BriefcaseIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
              label="Careers"
              to="/careers"
              active={location.pathname === "/careers"}
              collapsed={collapsed}
            />
          </nav>
        </>
      )}
    </aside>
  );
}

function SiderItem({
  icon,
  label,
  to,
  active,
  badge,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  badge?: string;
  collapsed?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors
        ${active
          ? "bg-zinc-100 dark:bg-zinc-800 text-orange-600 font-semibold"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
        }`}
    >
      {icon}
      {!collapsed && <span className="flex-1 text-sm">{label}</span>}
      {!collapsed && badge && (
        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
          {badge}
        </span>
      )}
    </Link>
  );
}