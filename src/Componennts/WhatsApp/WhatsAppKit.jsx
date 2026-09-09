import React, { useEffect, useState } from "react";
import "./WhatsAppKit.css";
import { WhatsappIcon } from "react-share";

/* Deep link to the ZOZAC WhatsApp chat (kept from the old floating button). */
const WHATSAPP_LINK = "https://wa.me/message/WYIXQMMFCXDVH1";

const QUICK_REPLIES = [
  "I want to volunteer",
  "I want to donate",
  "Tell me about your programs",
];

const openChat = (message) => {
  const url = message
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
    : WHATSAPP_LINK;
  window.open(url, "_blank", "noopener,noreferrer");
};

const WhatsAppKit = () => {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [nudge, setNudge] = useState(false);
  const [draft, setDraft] = useState("");

  /* Friendly nudge: slide in the "Chat with us" bubble shortly after load. */
  useEffect(() => {
    const show = setTimeout(() => {
      if (!open) setNudge(true);
    }, 4000);
    const hide = setTimeout(() => setNudge(false), 14000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [open]);

  /* Esc closes the chat panel. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = () => {
    setUnread(false);
    setNudge(false);
    setOpen((prev) => !prev);
  };

  const sendDraft = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    openChat(text);
  };

  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="wa-kit" role="complementary" aria-label="WhatsApp chat">
      {/* Chat panel */}
      {open && (
        <section
          className="wa-kit-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Chat with ZOZAC Community on WhatsApp"
        >
          <header className="wa-kit-header">
            <img
              className="wa-kit-avatar"
              src="/logo1.jpg"
              alt="ZOZAC Community logo"
            />
            <div className="wa-kit-identity">
              <strong>ZOZAC Community</strong>
              <span className="wa-kit-status">
                <span className="wa-kit-dot" aria-hidden="true" />
                Online &bull; replies instantly
              </span>
            </div>
            <button
              type="button"
              className="wa-kit-close"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              &times;
            </button>
          </header>

          <div className="wa-kit-body">
            <div className="wa-kit-bubble">
              <p>
                Hello &#128075; Welcome to <strong>ZOZAC Community</strong>!
                How can we help you today?
              </p>
              <span className="wa-kit-time">{now}</span>
            </div>
            <div className="wa-kit-quick">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  className="wa-kit-chip"
                  onClick={() => openChat(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          <form className="wa-kit-input" onSubmit={sendDraft}>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message..."
              aria-label="Type your WhatsApp message"
              maxLength={500}
            />
            <button
              type="submit"
              className="wa-kit-send"
              aria-label="Send message on WhatsApp"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <button
            type="button"
            className="wa-kit-open"
            onClick={() => openChat("")}
          >
            Open in WhatsApp
          </button>
        </section>
      )}

      {/* Floating button row */}
      <div className="wa-kit-fab-row">
        {!open && (nudge || unread) && (
          <button
            type="button"
            className="wa-kit-nudge"
            onClick={toggle}
            aria-label="Open WhatsApp chat"
          >
            Chat with us &#128075;
          </button>
        )}
        <button
          type="button"
          className="wa-kit-fab"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        >
          {!open && <span className="wa-kit-ping" aria-hidden="true" />}
          {open ? (
            <span className="wa-kit-fab-x" aria-hidden="true">
              &times;
            </span>
          ) : (
            <WhatsappIcon size={32} round />
          )}
          {!open && unread && (
            <span className="wa-kit-badge" aria-hidden="true">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppKit;
