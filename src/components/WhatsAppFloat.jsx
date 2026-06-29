import React, { useState } from 'react';
import { X } from 'lucide-react';

const whatsappNumber = '923141133859';
const message = encodeURIComponent('Hello Noren Automotive, I want to chat with the store owner.');

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const chatUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="whatsapp-float">
      {open && (
        <div className="whatsapp-panel" role="dialog" aria-label="WhatsApp chat options">
          <button className="whatsapp-close" type="button" aria-label="Close WhatsApp options" onClick={() => setOpen(false)}>
            <X size={14} />
          </button>
          <strong>Chat with store owner</strong>
          <p>Get quick help for bookings, packages, and service questions.</p>
          <a href={chatUrl} target="_blank" rel="noreferrer">Open WhatsApp Chat</a>
        </div>
      )}
      <button
        className="whatsapp-button"
        type="button"
        aria-label="Open WhatsApp chat options"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.04 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.24.59 4.43 1.71 6.36L3.15 28.8l6.69-1.75a12.84 12.84 0 0 0 6.2 1.58h.01c7.04 0 12.77-5.71 12.77-12.73S23.08 3.2 16.04 3.2Zm0 23.28h-.01c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-3.97 1.04 1.06-3.86-.25-.4a10.5 10.5 0 0 1-1.62-5.67c0-5.83 4.68-10.57 10.44-10.57 2.79 0 5.42 1.1 7.4 3.1a10.43 10.43 0 0 1 3.05 7.45c0 5.83-4.68 10.58-10.45 10.58Zm5.73-7.92c-.31-.16-1.86-.91-2.15-1.02-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1 1.23-.19.21-.37.23-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"
          />
        </svg>
      </button>
    </div>
  );
}
