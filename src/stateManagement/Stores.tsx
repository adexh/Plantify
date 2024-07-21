import { create } from "zustand";

type useShowHideStoreType = {
  initial: boolean;
  toggle: () => void;
};

export const useShowHideStore = create<useShowHideStoreType>((set) => ({
  initial: false,
  toggle: () => set((state) => ({ initial: !state.initial })),
}));
