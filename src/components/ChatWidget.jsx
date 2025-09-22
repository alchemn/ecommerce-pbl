// src/components/ChatWidget.jsx
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const TypingIndicator = () => (
  <div className="flex items-center justify-start space-x-1 p-2">
    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
  </div>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Halo! Ada yang bisa saya bantu?",
        },
      ]);
    }
    scrollToBottom();
  }, [open, messages]);

const sendMessage = async () => {
  if (!input.trim()) return;
  const newMessages = [...messages, { role: "user", content: input }];
  setMessages(newMessages);
  setInput("");
  setIsTyping(true); 

  try {
    const res = await axios.post("http://localhost:9009/chat", {
      message: input,
    });

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: res.data.reply },
    ]);
  } catch (err) {
    console.error(err);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};


  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-72 md:w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ease-in-out">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Asisten E-Commerce</h3>
              <p className="text-sm text-blue-200">Online</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-1">
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 border-t bg-gray-50 rounded-b-2xl">
            <div className="flex items-center bg-white rounded-full border">
              <input
                type="text"
                placeholder="Tulis pesan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 w-full px-4 py-2 bg-transparent rounded-full focus:outline-none"
              />
              <button
                className="m-1 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none transition-colors"
                onClick={sendMessage}
                aria-label="Send Message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform rotate-90"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1_0_0_0_1.169_1.409l5-1.429A1_1_0_0_0_9_15.571V11a1_1_0_1_1_2_0v4.571a1_1_0_0_0_.725.962l5_1.428a1_1_0_0_0_1.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Open Chat"
      >
        <ChatIcon />
      </button>
    </>
  );
}


