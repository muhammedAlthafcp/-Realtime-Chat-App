// useAuthstore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, isCheckingAuth: false });
    } catch (err) {
      set({ authUser: null, isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;
