"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function N8nChat() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const { createChat } = await import("@n8n/chat");
      const chat = createChat({
        webhookUrl:
          "https://prakashvara.app.n8n.cloud/webhook/11d24d1f-2da6-4f90-b838-b6540943d4c7/chat",
        mode: "window",
        showWelcomeScreen: false,
        initialMessages: [
          "Welcome to Divine Kitchen! 🍽️",
          "How can I help you today? Ask me about our menu, reservations, hours, or anything else!",
        ],
        i18n: {
          en: {
            title: "Divine Kitchen",
            subtitle: "Your personal concierge, anytime.",
            footer: "",
            getStarted: "Start a Conversation",
            inputPlaceholder: "Ask about our menu, hours, reservations...",
            closeButtonTooltip: "Close chat",
          },
        },
      });

      cleanup = chat.unmount;
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
