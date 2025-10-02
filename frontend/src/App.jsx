import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="relative w-full min-h-screen h-screen text-white">
      {/* 🔥 Global Background */}
    {/* 🔥 Global Background */}
<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-800 via-slate-900 to-blue-900" />

{/* Top Left Blur Circle */}
<div className="absolute top-0 left-0 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] bg-pink-500/20 blur-[160px]" />

{/* Bottom Right Blur Circle */}
<div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] bg-cyan-500/20 blur-[160px]" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
