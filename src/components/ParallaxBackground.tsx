import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: React.ReactNode
  imageSrc: string
  overlayClassName?: string
  parallaxSpeed?: number
  effect?: 'kenBurns' | 'drift' | 'pan' | 'none'
  className?: string
}

export default function ParallaxBackground({
  children,
  imageSrc,
  overlayClassName = '',
  parallaxSpeed = 0.3,
  effect = 'none',
  className = '',
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile] = useState(() => window.innerWidth < 768)
  const [prefersReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${parallaxSpeed * 100}%`])
  const disabled = isMobile || prefersReduced

  let animateProps = {}

  if (!disabled) {
    if (effect === 'kenBurns') {
      animateProps = {
        scale: [1, 1.1, 1],
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      }
    } else if (effect === 'drift') {
      animateProps = {
        x: ['0%', '-5%', '0%'],
        transition: { duration: 30, repeat: Infinity, ease: 'easeInOut' },
      }
    } else if (effect === 'pan') {
      animateProps = {
        x: ['0%', '3%', '0%', '-3%', '0%'],
        transition: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
      }
    }
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background image with parallax */}
      <motion.div className="absolute -left-[10%] -right-[10%] -top-[20%] -bottom-[20%]" style={disabled ? {} : { y }}>
        <motion.img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          animate={animateProps}
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
