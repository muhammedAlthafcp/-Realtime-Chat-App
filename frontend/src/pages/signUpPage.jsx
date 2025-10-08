import { useState } from "react";
import useAuthStore from "../store/useAuthstore";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Number: "",
    Password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData); // ✅ sends keys exactly as backend expects
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-white">
      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-slate-900 to-blue-900" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[160px]" />

      {/* Sign Up Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col"
      >
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
          Create Account
        </h2>

        {/* Full Name */}
        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName}
          onChange={handleChange}
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        {/* Email */}
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        {/* Number */}
        <input
          type="number"
          name="Number"
          placeholder="Number"
          value={formData.Number}
          onChange={handleChange}
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        {/* Password */}
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={formData.Password}
          onChange={handleChange}
          className="mb-6 sm:mb-8 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={isSigningUp}
          className="w-full py-3 sm:py-4 rounded-2xl bg-blue-500/50 hover:bg-blue-500/70 text-white font-bold text-sm sm:text-base md:text-lg transition mb-4 sm:mb-6"
        >
          {isSigningUp ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="text-center text-xs sm:text-sm md:text-base text-white">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Login</span>
        </div>
      </form>
    </div>
  );
}


