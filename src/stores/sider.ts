import { create } from "zustand";

type SiderState = {
  collapsed: boolean;
  toggle: () => void;
};

export const useSiderStore = create<SiderState>((set) => ({
  collapsed: false,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
}));