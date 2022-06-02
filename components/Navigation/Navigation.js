import React, {useRef} from 'react';
import { motion, useCycle } from 'framer-motion';
import styles from '../../styles/Home.module.scss';
import List from './List';
import MenuToggle from './MenuToggle';
import {useDimensions} from './use-dimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 40px) 80px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100vw - 60px) 60px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.nav}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <List/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default Navigation