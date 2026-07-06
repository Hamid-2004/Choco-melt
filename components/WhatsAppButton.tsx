"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  className?: string;
  floating?: boolean;
}

export default function WhatsAppButton({
  className,
  floating = false,
}: WhatsAppButtonProps) {
  const link = (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-medium shadow-lg shadow-[#25D366]/25 hover:bg-[#20BD5A] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      }
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp</span>
    </a>
  );

  if (!floating) return link;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </motion.div>
  );
}
