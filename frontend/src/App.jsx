import { Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import useAuthStore from "./store/useAuthstore.js";
import { useEffect } from "react";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Auth User:", authUser);

  if (isCheckingAuth) {
    return <div className="text-white">Loading...</div>; // wait until auth check finishes
  }

  return (
    <div className="relative w-full min-h-screen h-screen text-white">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-800 via-slate-900 to-blue-900" />

      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] bg-pink-500/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] bg-cyan-500/20 blur-[160px]" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
