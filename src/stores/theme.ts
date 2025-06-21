import { create } from 'zustand';

type ThemeState = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

const getInitialTheme = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') === 'dark';
  }
  // 在服务器端渲染或者构建时，可以返回一个默认值
  return false;
};

export const useThemeStore = create<ThemeState>((set) => ({
  dark: getInitialTheme(),
  setDark: (isDark) => set({ dark: isDark }),
})); 