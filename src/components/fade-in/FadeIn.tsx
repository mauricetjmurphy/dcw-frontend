import { createContext, useContext } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/react';

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div> & {
    style?: React.CSSProperties;
  }
) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  style,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean } & {
  style?: React.CSSProperties;
}) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        style={{
          display: 'flex',
          flexDirection: isLargerThan600 ? 'row' : 'column',
          ...style,
        }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}