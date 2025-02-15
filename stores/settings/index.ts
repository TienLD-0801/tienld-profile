import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingState {
  darkMode: 'light' | 'dark';
  isHydrated: boolean;
  _hasHydrated: boolean;
  toggleDarkMode: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useSettingStore = create<SettingState>()(
  persist(
    (set, get) => ({
      darkMode: 'light',
      isHydrated: false,

      toggleDarkMode: () => {
        const newMode = get().darkMode === 'dark' ? 'light' : 'dark';
        set({ darkMode: newMode });

        if (newMode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: 'settings',
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    }
  )
);
