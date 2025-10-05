// useAuthstore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { signup } from "../../../backend/src/controller/auth.controllers";
import toast from "react-hot-toast";

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
 
   signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });

      toast.success("Account created successfully!");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
}));

export default useAuthStore;
