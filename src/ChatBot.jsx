import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const powerUps = ["🔥", "⚡", "🌟", "💡", "🧠"];

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingChats, setLoadingChats] = useState(true);
  const [botTyping, setBotTyping] = useState(false);
  const [currentPowerUp, setCurrentPowerUp] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPowerUp((prev) => (prev + 1) % powerUps.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://chatbot-backend-livid-eight.vercel.app/api/user/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user", err);
      } finally {
        setLoadingUser(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("https://chatbot-backend-livid-eight.vercel.app/api/chat", {
          withCredentials: true,
        });
        setAllChats(res.data);
      } catch (err) {
        console.error("Failed to fetch chat list", err);
      } finally {
        setLoadingChats(false);
      }
    };
    fetchChats();
  }, []);

  const loadChat = async (id) => {
    try {
      const res = await axios.get(`https://chatbot-backend-livid-eight.vercel.app/api/chat/${id}`, {
        withCredentials: true,
      });
      setChat(res.data.messages);
      setChatId(id);
    } catch (err) {
      console.error("Failed to load chat", err);
    }
  };

  const startNewChat = () => {
    setChat([]);
    setChatId(null);
    setInput("");
  };

  const sendMessage = async () => {
    if (!input.trim() || botTyping) return;

    const userMsg = { sender: "user", content: input };
    setChat((prev) => [...prev, userMsg]);
    setInput("");
    setBotTyping(true);

    try {
      const res = await axios.post(
        "https://chatbot-backend-livid-eight.vercel.app/api/chat",
        { message: input, chatId },
        { withCredentials: true }
      );

      const botMsg = { sender: "bot", content: res.data.reply };
      setChat((prev) => [...prev, botMsg]);

      if (!chatId && res.data.isNewChat) {
        setChatId(res.data.chatId);
        setAllChats((prev) => [
          {
            _id: res.data.chatId,
            chatTitle: res.data.chatTitle || "New Chat",
          },
          ...prev,
        ]);
      }
    } catch (err) {
      console.error("Message failed", err);
      setChat((prev) => [
        ...prev,
        { sender: "bot", content: "Error: could not fetch reply." },
      ]);
    } finally {
      setBotTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://chatbot-backend-livid-eight.vercel.app/api/user/logout", {}, { withCredentials: true });
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="h-screen w-screen flex bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white/5 z-10 p-4 flex flex-col space-y-4 border-r border-white/20">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-200 to-green-400 bg-clip-text text-transparent">
          GeekBot
        </h2>

        <button
          onClick={startNewChat}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded"
        >
          + New Chat
        </button>

        <div className="flex-1 overflow-y-auto space-y-1 mt-2">
          {loadingChats ? (
            <p className="text-sm text-gray-400">Loading chats...</p>
          ) : allChats.length === 0 ? (
            <p className="text-sm">No chats yet.</p>
          ) : (
            allChats.map((c) => (
              <div
                key={c._id}
                onClick={() => loadChat(c._id)}
                className={`cursor-pointer px-3 py-2 rounded text-sm hover:bg-gray-700 ${chatId === c._id ? "bg-gray-700" : ""
                  }`}
              >
                {c.chatTitle || "New Chat"}
              </div>
            ))
          )}
        </div>

        {/* Profile */}
        <div className="mt-auto relative">
          {loadingUser ? (
            <div className="text-sm text-gray-400">Loading user...</div>
          ) : user ? (
            <>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="w-full bg-white/20 text-left p-2 rounded hover:bg-gray-700"
              >
                👤 {user.name}
              </button>
              {showProfile && (
                <div className="absolute bottom-12 left-0 bg-white/20 p-4 rounded shadow w-full border border-gray-700">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full text-sm bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-sm text-gray-400">Not logged in</div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b text-center font-bold text-xl bg-white/5 border-white/20">
          {chatId ? "Chat" : "New Conversation"}
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-black">
          {chat.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[70%] px-4 py-2 rounded-lg break-words text-sm ${msg.sender === "user"
                  ? "bg-green-700 self-end text-right ml-auto"
                  : "bg-gray-800 self-start text-left mr-auto"
                }`}
            >
              {msg.content}
            </div>
          ))}

          {botTyping && (
            <div className="text-gray-400 text-sm flex items-center space-x-1 animate-pulse">
              <span className="text-xl">{powerUps[currentPowerUp]}</span>
              <span>GeekBot is thinking...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t-0.5 bg-[#111] flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-gray-300"
            disabled={botTyping}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || botTyping}
            className="bg-gradient-to-br from-yellow-300 to-green-500 text-white font-semibold px-4 py-2 rounded hover:from-yellow-400 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
