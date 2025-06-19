import { create } from "zustand";

type SiderState = {
  collapsed: boolean;
  toggle: () => void;
};

export const useSiderStore = create<SiderState>((set) => ({
  collapsed: typeof window !== "undefined" && window.innerWidth < 768,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
}));