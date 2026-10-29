import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
export function ContactIcon({ platform }: { platform: string }) {
  const common = { size: 24, "aria-hidden": true as const };
  if (platform === "Instagram") return <Instagram {...common} />;
  if (platform === "YouTube") return <Youtube {...common} />;
  if (platform === "Phone") return <Phone {...common} />;
  if (platform === "Email") return <Mail {...common} />;
  if (platform === "Telegram")
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.4 3.1c.6-.2 1.1.3.9 1L19 20c-.1.7-.7.9-1.3.5l-5.1-3.8-2.5 2.5c-.3.3-.5.5-.9.5l.4-5.2 9.4-8.5c.4-.4-.1-.6-.6-.3L6.8 13.1 1.9 11.6c-.7-.2-.7-.7.1-1L21.4 3.1Z" />
      </svg>
    );
  if (platform === "WhatsApp")
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-5A8.5 8.5 0 1 1 20.5 11.7Z" />
        <path d="m8.5 7.5 1.7 3-1 1.1a8.3 8.3 0 0 0 3.3 3.2l1.1-1 3 1.5c-.4 2.4-2 2.2-3.7 1.5-3.5-1.5-6.3-4.7-6.2-7.1.1-1.6 1.1-2.4 1.8-2.2Z" />
      </svg>
    );
  if (platform === "TikTok")
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3v12.5a4.5 4.5 0 1 1-4.5-4.5" />
        <path d="M14 3c.3 3.7 2.4 5.8 6 6V5.8A5 5 0 0 1 17 3Z" />
      </svg>
    );
  return <LinkIcon {...common} />;
}
