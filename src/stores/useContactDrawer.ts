import { create } from "zustand";

interface ContactDrawerState {
  open: boolean;
  context: string | null;
  openDrawer: (context?: string) => void;
  closeDrawer: () => void;
}

export const useContactDrawer = create<ContactDrawerState>((set) => ({
  open: false,
  context: null,
  openDrawer: (context) => set({ open: true, context: context ?? null }),
  closeDrawer: () => set({ open: false }),
}));
