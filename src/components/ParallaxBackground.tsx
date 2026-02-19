import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset']

interface ParallaxBackgroundProps {
  children: React.ReactNode
  imageSrc: string
  overlayClassName?: string
  parallaxSpeed?: number
  effect?: 'kenBurns' | 'drift' | 'pan' | 'none'
  className?: string
  scrollOffset?: ScrollOffset
}

export default function ParallaxBackground({
  children,
  imageSrc,
  overlayClassName = '',
  parallaxSpeed = 0.3,
  effect = 'none',
  className = '',
  scrollOffset = ['start end', 'end start'],
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  const [prefersReduced, setPrefersReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setIsMobile(window.innerWidth < 768)
      setPrefersReduced(mq.matches)
    }

    update()

    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)

    // matchMedia change handler (Safari supports addEventListener in newer versions)
    if (mq.addEventListener) mq.addEventListener('change', update)
    else mq.addListener(update)

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      if (mq.removeEventListener) mq.removeEventListener('change', update)
      else mq.removeListener(update)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
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
      <motion.div className="absolute -top-[20%] -right-[10%] -bottom-[20%] -left-[10%]" style={disabled ? {} : { y }}>
        <motion.img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          animate={animateProps}
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}
