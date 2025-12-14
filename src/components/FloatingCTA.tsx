import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.a>
  );
};
