import type { Variants } from 'framer-motion'

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}
