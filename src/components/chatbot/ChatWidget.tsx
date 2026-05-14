"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { useChatbot } from "@/hooks/useChatbot";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotState = useChatbot();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300">
          <ChatWindow state={chatbotState} onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[var(--navy)] hover:bg-[#1a2744] text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
