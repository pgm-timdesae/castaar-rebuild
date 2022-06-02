import React from 'react';
import ListItem from './ListItem';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const List = () => {
  return (
    <motion.ul
      variants={variants}
      className={styles.navList}
    >
      <ListItem title="Home" />
      <ListItem title="Who are we?" />
      <ListItem title="What do we do?" />
      <ListItem title="Advertising" />
      <ListItem title="Graphic design" />
      <ListItem title="Print" />
      <ListItem title="Digital" />
      <ListItem title="Contact" />
    </motion.ul>
  )
}

export default List