import { motion } from 'framer-motion';

export type HeroBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export const HeroBackgroundEffect = ({
  className: _className,
  children,
}: HeroBackgroundProps) => {
  return (
    <div className="w-full relative bg-gradient-to-b from-orange-50 to-teal-50 overflow-hidden">
      {/* Animated U-Shape Design with Glow - Teal for heading & buttons, Orange outer */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            `radial-gradient(
              ellipse 80% 90% at 50% 0%,
              rgba(20, 184, 166, 0.4) 0%,
              rgba(15, 118, 110, 0.35) 30%,
              rgba(20, 184, 166, 0.25) 55%,
              rgba(249, 115, 22, 0.25) 75%,
              rgba(251, 146, 60, 0.3) 88%,
              rgba(249, 115, 22, 0.35) 100%
            )`,
            `radial-gradient(
              ellipse 85% 95% at 52% 0%,
              rgba(20, 184, 166, 0.5) 0%,
              rgba(15, 118, 110, 0.4) 28%,
              rgba(20, 184, 166, 0.3) 50%,
              rgba(249, 115, 22, 0.3) 72%,
              rgba(251, 146, 60, 0.35) 85%,
              rgba(249, 115, 22, 0.4) 100%
            )`,
            `radial-gradient(
              ellipse 82% 92% at 48% 0%,
              rgba(20, 184, 166, 0.45) 0%,
              rgba(15, 118, 110, 0.38) 32%,
              rgba(20, 184, 166, 0.28) 58%,
              rgba(249, 115, 22, 0.28) 78%,
              rgba(251, 146, 60, 0.32) 90%,
              rgba(249, 115, 22, 0.38) 100%
            )`,
          ],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          filter: 'blur(0.5px) brightness(1.1)',
          boxShadow:
            'inset 0 0 100px rgba(20, 184, 166, 0.1), inset 0 0 200px rgba(249, 115, 22, 0.08)',
        }}
      />

      {/* Additional glow layer */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
          scale: [1, 1.02, 0.98, 1.01, 1],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          background: `radial-gradient(
            ellipse 60% 70% at 50% 0%,
            rgba(20, 184, 166, 0.1) 0%,
            rgba(249, 115, 22, 0.08) 70%,
            transparent 100%
          )`,
          filter: 'blur(1px)',
        }}
      />

      {children}
    </div>
  );
};
