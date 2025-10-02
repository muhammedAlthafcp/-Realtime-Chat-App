export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col">
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg w-full"
        />

        <button className="w-full py-3 sm:py-4 rounded-2xl bg-blue-500/50 hover:bg-blue-500/70 text-white font-bold text-sm sm:text-base md:text-lg transition mb-4 sm:mb-6">
          Login
        </button>

        <div className="text-center text-white text-xs sm:text-sm md:text-base">
          Don't have an account? <span className="text-blue-400 cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  );
}



