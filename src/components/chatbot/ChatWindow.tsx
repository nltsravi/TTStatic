import { useState, useRef, useEffect } from "react";
import { Send, Settings, ChevronDown, Download, AlertCircle, Link as LinkIcon, ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useChatbot } from "@/hooks/useChatbot";

export function ChatWindow({ state, onClose }: { state: ReturnType<typeof useChatbot>, onClose: () => void }) {
  const { messages, status, isReady, isWebLLMReady, isGenerating, sources, useOllama, setUseOllama, loadWebLLM, webLLMProgress, askQuestion } = state;
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const handleSend = () => {
    if (!input.trim() || isGenerating) return;
    askQuestion(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[var(--navy)] text-white shrink-0">
        <div className="flex flex-col">
          <h3 className="font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Tirwin AI Assistant</h3>
          <p className="text-[10px] text-gray-300 flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${isReady ? 'bg-green-400' : 'bg-yellow-400'}`} />
            {status}
          </p>
        </div>
        <button onClick={() => setShowSettings(!showSettings)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {showSettings ? (
        <div className="flex-1 p-5 overflow-y-auto">
          <h4 className="font-semibold mb-4 text-[var(--navy)]">AI Engine Settings</h4>
          
          <div className="space-y-4">
            <label className="flex items-start gap-3 p-3 bg-white border rounded-xl cursor-pointer hover:border-[var(--gold)] transition-colors">
              <input type="radio" checked={!useOllama} onChange={() => setUseOllama(false)} className="mt-1" />
              <div>
                <p className="font-medium text-sm">Browser AI (WebLLM)</p>
                <p className="text-xs text-gray-500 mt-1">Runs entirely in your browser using your device's GPU. The model will be securely downloaded from Tirwin's servers on your first launch.</p>
                {!isWebLLMReady && !useOllama && webLLMProgress && (
                  <div className="mt-3">
                    <div className="text-[10px] text-gray-500">
                      Downloading: {Math.round(webLLMProgress.progress * 100)}%
                      <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className="bg-[var(--gold)] h-full transition-all duration-300" style={{ width: `${webLLMProgress.progress * 100}%` }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 bg-white border rounded-xl cursor-pointer hover:border-[var(--gold)] transition-colors">
              <input type="radio" checked={useOllama} onChange={() => setUseOllama(true)} className="mt-1" />
              <div>
                <p className="font-medium text-sm">Local Ollama</p>
                <p className="text-xs text-gray-500 mt-1">Connects to a locally running Ollama instance on port 11434. Perfect for developers.</p>
              </div>
            </label>
          </div>

          <button onClick={() => setShowSettings(false)} className="mt-6 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors">
            Back to Chat
          </button>
        </div>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">How can I help you?</h4>
                <p className="text-xs text-gray-500">Ask me anything about Tirwin Talent programs, training, or services.</p>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[var(--navy)] text-white rounded-br-sm' 
                    : 'bg-white border shadow-sm text-gray-800 rounded-bl-sm whitespace-pre-wrap'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {sources.length > 0 && !isGenerating && (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider pl-1">Sources</p>
                <div className="flex flex-wrap gap-2">
                  {sources.slice(0, 3).map(src => (
                    <Link key={src.id} href={src.route} target="_blank" className="flex items-center gap-1.5 text-xs bg-white border rounded-md px-2 py-1.5 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors max-w-[200px]">
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      <span className="truncate">{src.pageTitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Model is auto-loading in the background. No warning needed. */}

          {/* Input Area */}
          <div className="p-3 bg-white border-t shrink-0">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 border border-transparent focus-within:border-[var(--gold)] focus-within:bg-white transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={!isReady ? "Initializing index..." : "Ask a question..."}
                disabled={!isReady || isGenerating}
                className="flex-1 bg-transparent border-none outline-none text-sm py-2 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || !isReady || isGenerating}
                className="w-8 h-8 flex items-center justify-center bg-[var(--navy)] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a2744] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
