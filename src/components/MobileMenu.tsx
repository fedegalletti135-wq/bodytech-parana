import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  whatsappUrl: string;
  accentColor: string;
}

export default function MobileMenu({ links, whatsappUrl, accentColor }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-stone-300 hover:text-white transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-4 right-4 bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-2.5 z-50"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-white text-sm font-semibold p-2.5 hover:bg-stone-800/70 rounded-xl transition-all no-underline block"
              >
                {link.label}
              </a>
            ))}

            <hr className="border-stone-800 my-1" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 no-underline shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              Pedir Turno por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
