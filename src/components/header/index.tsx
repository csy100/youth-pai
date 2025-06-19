import { Bars3Icon, LanguageIcon, MagnifyingGlassIcon, MoonIcon, SunIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "@/assets/logo.svg"
import { useTheme } from "@/hooks/useTheme"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import i18n from "@/configs/i18n"
import { useSiderStore } from "@/stores/sider"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"

function Header() {
  const { dark, setDark } = useTheme()
  const { t } = useTranslation()
  const { toggle } = useSiderStore()
  const [showSearch, setShowSearch] = useState(false)
  
  const langOptions = [
    {
      label: '中文',
      key: 'zh',
      icon: <span className="text-xl">🇨🇳</span>,
      onClick: () => i18n.changeLanguage('zh')
    },
    {
      label: 'English',
      key: 'en',
      icon: <span className="text-xl">🇺🇸</span>,
      onClick: () => i18n.changeLanguage('en')
    }
  ]

  return (
    <header className="h-14 bg-white dark:bg-zinc-900 flex items-center border-zinc-200 dark:border-zinc-800">
      {/* 左侧 */}
      <div className="flex items-center ml-3 md:ml-5 flex-1 md:flex-none md:w-60">
        <button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 cursor-pointer transition-colors" onClick={toggle}>
          <Bars3Icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-700 dark:text-zinc-200" />
        </button>
        <img src={Logo} alt="logo" className="w-6 h-6 md:w-8 md:h-8 ml-3 md:ml-5" />
        <span className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 tracking-tighter">{t('LogoTitle')}</span>
      </div>

      {/* 中间搜索栏 - 桌面端 */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="w-full max-w-xl">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder={t('SearchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 focus:bg-white dark:focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 右侧 */}
      <div className="flex items-center gap-2 md:gap-3 pr-3 md:pr-10 justify-end">
        {/* 移动端搜索按钮 */}
        <button
          className="md:hidden p-2 cursor-pointer rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
          onClick={() => setShowSearch(true)}
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-200" />
        </button>

        {/* 主题切换按钮加Tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="p-2 cursor-pointer rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors relative flex items-center justify-center"
                onClick={() => setDark(!dark)}
                aria-label="切换主题"
              >
                <MoonIcon
                  className={`w-5 h-5 md:w-6 md:h-6 text-zinc-600 dark:text-yellow-400 absolute transition-opacity transition-transform duration-300
                    ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}
                  `}
                />
                <SunIcon
                  className={`w-5 h-5 md:w-6 md:h-6 text-zinc-600 dark:text-yellow-400 transition-opacity transition-transform duration-300
                    ${dark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
                  `}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {t('SwitchTheme')}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center">
                    <LanguageIcon className="w-5 h-5 md:w-6 md:h-6 text-zinc-600 dark:text-zinc-200" />
                  </button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                {t('Language')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent className="w-32" align="center">
            <DropdownMenuGroup>
              {langOptions.map(option => (
                <DropdownMenuItem key={option.key} onClick={option.onClick} className="flex items-center">
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/login">
          <button className="cursor-pointer p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center">
            <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-zinc-600 dark:text-zinc-200" />
          </button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer ml-2 md:ml-3 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-cyan-200 dark:bg-cyan-700 rounded-full"></span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="text-center">My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex items-center">
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex items-center">Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center">Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="flex items-center">Email</DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center">Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center">More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="flex items-center">
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center">GitHub</DropdownMenuItem>
            <DropdownMenuItem className="flex items-center">Support</DropdownMenuItem>
            <DropdownMenuItem className="flex items-center" disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center">
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 移动端搜索对话框 */}
      <Dialog open={showSearch} onOpenChange={setShowSearch}>
        <div className={`fixed inset-0 z-50 bg-white dark:bg-zinc-900 p-4 ${showSearch ? 'block' : 'hidden'}`}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSearch(false)}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600"
            >
              <XMarkIcon className="w-6 h-6 text-zinc-600 dark:text-zinc-200" />
            </button>
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder={t('SearchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 focus:bg-white dark:focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}

export default Header 