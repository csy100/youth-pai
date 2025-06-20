import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  BookOpenIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useSiderStore } from "@/stores/sider";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Sider() {
  const { collapsed, toggle } = useSiderStore();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  const mainMenu = [
    {
      icon: HomeIcon,
      label: t("home"),
      to: "/home",
    },
    {
      icon: FireIcon,
      label: t("popular"),
      to: "/popular",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: t("answers"),
      to: "/answers",
      badge: "BETA",
    },
    {
      icon: BookOpenIcon,
      label: t("explore"),
      to: "/explore",
    },
    {
      icon: UserGroupIcon,
      label: t("all"),
      to: "/all",
    },
  ];

  const resourcesMenu = [
    {
      icon: InformationCircleIcon,
      label: t("about"),
      to: "/about",
    },
    {
      icon: BriefcaseIcon,
      label: t("advertisement"),
      to: "/advertisement",
    },
    {
      icon: BookOpenIcon,
      label: t("youth_pro"),
      to: "/youth-pro",
      badge: "BETA",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: t("help"),
      to: "/help",
    },
    {
      icon: BookOpenIcon,
      label: t("blog"),
      to: "/blog",
    },
    {
      icon: BriefcaseIcon,
      label: t("careers"),
      to: "/careers",
    },
  ];

  const communitiesMenu = [
    {
      icon: BriefcaseIcon,
      label: "y/Bitcoin",
      to: "/y-bitcoin",
    },
    {
      icon: Cog6ToothIcon,
      label: "y/ChatGPT",
      to: "/y-chatgpt",
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleItemClick = () => {
    if (isMobile && !collapsed) {
      toggle();
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {!collapsed && isMobile && (
        <div
          onClick={toggle}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside className={`fixed top-0 left-0 md:static z-40 h-screen md:h-full bg-white dark:bg-zinc-900 dark:border-zinc-800 flex flex-col transition-transform md:transition-width duration-300 ${
        collapsed 
          ? 'w-64 -translate-x-full md:translate-x-0 md:w-20' 
          : 'w-64 translate-x-0 md:w-64'
      }`}>
        <div className="flex-1 overflow-y-auto py-4">
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
                onItemClick={handleItemClick}
              />
            ))}
          </nav>

          {/* 其他内容：只在未折叠时显示 */}
          {!collapsed && (
            <>
              {/* 分割线 */}
              <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" />

              {/* 自定义分组 */}
              {/* <div className="px-4 text-xs text-zinc-400 mb-2">CUSTOM FEEDS</div>
              <nav className="flex flex-col gap-1 px-4">
                <SiderItem
                  icon={<PlusCircleIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
                  label="Create a custom feed"
                  to="/create-custom-feed"
                  active={location.pathname === "/create-custom-feed"}
                  collapsed={collapsed}
                  onItemClick={handleItemClick}
                />
              </nav> */}
              {/* <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" /> */}

              {/* 社区分组 */}
              <div className="px-4 text-xs text-zinc-400 mb-2">COMMUNITIES</div>
              <nav className="flex flex-col gap-1 px-4 py-2">
                <SiderItem
                  icon={<PlusCircleIcon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
                  label={t("create_community")}
                  to="/create-community"
                  active={location.pathname === "/create-community"}
                  collapsed={collapsed}
                  onItemClick={handleItemClick}
                />
              </nav>
              <nav className="flex flex-col gap-1 px-4">
                {communitiesMenu.map(item => (
                  <SiderItem
                    key={item.to}
                    icon={<item.icon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
                    label={item.label}
                    to={item.to}
                    active={location.pathname === item.to}
                    collapsed={collapsed}
                    onItemClick={handleItemClick}
                  />
                ))}
              </nav>

              <div className="my-4 mx-auto w-[90%] border-t border-zinc-200 dark:border-zinc-800" />

              {/* 资源分组 */}
              <div className="px-4 text-xs text-zinc-400 mb-2">RESOURCES</div>
              <nav className="flex flex-col gap-1 px-4">
                {resourcesMenu.map(item => (
                  <SiderItem
                    key={item.to}
                    icon={<item.icon className={collapsed ? "w-7 h-7" : "w-5 h-5"} />}
                    label={item.label}
                    to={item.to}
                    badge={item.badge}
                    active={location.pathname === item.to}
                    collapsed={collapsed}
                    onItemClick={handleItemClick}
                  />
                ))}
              </nav>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

function SiderItem({
  icon,
  label,
  to,
  active,
  badge,
  collapsed,
  onItemClick,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  badge?: string;
  collapsed?: boolean;
  onItemClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onItemClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors
        ${active
          ? "bg-zinc-100 dark:bg-zinc-800 text-orange-600 font-semibold"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
        }`}
    >
      {icon}
      {!collapsed && <span className="flex-1 text-base">{label}</span>}
      {!collapsed && badge && (
        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
          {badge}
        </span>
      )}
    </Link>
  );
}