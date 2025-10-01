import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage"; // import your page component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<signUpPage />} /
      </Routes>
    </div>
  );
}

export default App;
