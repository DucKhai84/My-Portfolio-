
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Thiết lập giá trị khởi tạo dựa vào hướng animation
  let initial = {};
  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 };
      break;
    case "down":
      initial = { opacity: 0, y: -50 };
      break;
    case "left":
      initial = { opacity: 0, x: 50 };
      break;
    case "right":
      initial = { opacity: 0, x: -50 };
      break;
    case "none":
      initial = { opacity: 0 };
      break;
    default:
      initial = { opacity: 0, y: 50 };
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
      setHasAnimated(true);
    }
  }, [isInView, controls, delay, hasAnimated]);

  return (
    <motion.div ref={ref} initial={initial} animate={controls} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
