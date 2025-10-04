import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,         // ✅ initial state
  isCheckingAuth: true,   // ✅ initial state

  // ✅ checkAuth function
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, isCheckingAuth: false });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ authUser: null, isCheckingAuth: false });
    }
  },
}));
