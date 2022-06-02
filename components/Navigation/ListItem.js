import * as React from "react";
import { motion } from "framer-motion";
import styles from '../../styles/Home.module.scss';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const ListItem = ({title}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      className={styles.navListItem}
    >
      {title}
    </motion.li>
  )
}

export default ListItem