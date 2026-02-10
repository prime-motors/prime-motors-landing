import { motion } from 'framer-motion'

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+37360004260"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full
                 flex items-center justify-center shadow-lg shadow-primary/30
                 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40
                 transition-all duration-300 no-underline"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Call Prime Motors"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </motion.a>
  )
}
