import { useEffect } from 'react'
import { useThemeStore } from '@/stores/theme'

export function useTheme() {
  const { dark, setDark } = useThemeStore()

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return { dark, setDark }
} 