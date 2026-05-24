import { create } from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  formSubmitted: boolean
  setFormSubmitted: (submitted: boolean) => void
  loadingProgress: number
  setLoadingProgress: (progress: number) => void
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark', // Roofero has a strong dark foundation by default
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  formSubmitted: false,
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
  loadingProgress: 0,
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}))
