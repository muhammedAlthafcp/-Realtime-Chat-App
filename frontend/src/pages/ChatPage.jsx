import { useState, useEffect } from "react";

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState("Chats");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chats = [
    { name: "Aisha Khan", lastMessage: "See you tomorrow!", time: "14:10" },
    { name: "John Doe", lastMessage: "Hello!", time: "13:45" },
  ];

  const groups = [
    { name: "Team Alpha", lastMessage: "Meeting at 3 PM", time: "12:30" },
    { name: "Friends", lastMessage: "Party tonight!", time: "11:00" },
  ];

  const contacts = activeTab === "Chats" ? chats : groups;

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-slate-900 to-blue-900" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[160px]" />

      {/* Left Sidebar */}
      {(!activeChat || !isMobile) && (
        <div className="relative z-10 md:w-[300px] w-full md:h-screen h-auto p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-xl">Macp</h2>
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-3 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none"
          />

          {/* Tabs */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setActiveTab("Chats")}
              className={`flex-1 py-2 rounded-xl ${activeTab === "Chats" ? "bg-white/20" : "bg-white/10"} text-white hover:bg-white/30`}
            >
              Chats
            </button>
            <button
              onClick={() => setActiveTab("Groups")}
              className={`flex-1 py-2 rounded-xl ${activeTab === "Groups" ? "bg-white/20" : "bg-white/10"} text-white hover:bg-white/30`}
            >
              Groups
            </button>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1 pr-1">
            {contacts.map((contact, index) => (
              <div
                key={index}
                onClick={() => setActiveChat(contact)}
                className="flex items-center p-3 rounded-xl hover:bg-white/20 cursor-pointer transition"
              >
                <div className="relative w-12 h-12 rounded-full bg-white/30 flex items-center justify-center font-bold text-slate-900">
                  {contact.name[0]}
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">{contact.name}</span>
                    <span className="text-xs text-gray-300">{contact.time}</span>
                  </div>
                  <p className="text-sm text-gray-300">You: {contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Chat Panel */}
      {(activeChat || !isMobile) && (
        <div className="relative z-10 flex-1 h-screen md:ml-[4px] p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/20 pb-2">
                <div className="flex items-center">
                  {/* Mobile Back Button */}
                  {isMobile && (
                    <button
                      onClick={() => setActiveChat(null)}
                      className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Profile */}
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center font-bold text-slate-900">
                    {activeChat.name[0]}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">{activeChat.name}</h3>
                    <p className="text-xs text-gray-300">Online</p>
                  </div>
                </div>

                {/* 3-dot Options */}
                <button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1 flex flex-col">
                <div className="self-start max-w-[70%] px-4 py-[3px] rounded-2xl bg-white/20 text-white flex flex-col">
                  <span className="text-sm">Hi! How are you?</span>
                  <span className="text-xs text-gray-300 self-end mt-1">14:05</span>
                </div>

                <div className="self-end max-w-[70%] px-4 py-[3px] rounded-2xl bg-blue-500/30 text-white flex flex-col">
                  <span className="text-sm">I'm good, thanks! How about you?</span>
                  <span className="text-xs text-gray-300 self-end mt-1 flex items-center space-x-1">
                    <span>14:06</span>
                    <span>✓</span>
                  </span>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center mt-auto pt-2 border-t border-white/20">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-2xl bg-white/20 text-white placeholder-white/70 focus:outline-none"
                />
                <button className="ml-2 w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500/70 text-white">
                  ➤
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-white text-lg">
              Select a chat to start messaging
            </div>
          )}
        </div>
      )}
    </div>
  );
}
