import React, {useEffect} from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const Work = () => {

  const {ref, inView} = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x:0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView])

  return (
    <motion.div layout
      ref={ref}
      className={styles.work}
      >
      <motion.div
        className={styles.work__img}
        animate={animation}
      >
        <h2 className={styles.subtitle}>Some of our <br/>awesome shit<span className={styles.dot}> .</span></h2>
        <Image src="/images/car.png" alt="Our box" width={1088} height={734}></Image>
      </motion.div>

      <div
        className={styles.work__text}
      >
        <h3 className={styles.smalltitle}>Our happy clients<span className={styles.primaryText}></span></h3>
        <h2 className={styles.subtitle}><span className={styles.dot}>01 <br/></span>BMW LOUYET MOTOR</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Graphic design</li>      
          <li className={styles.listItem}>Wrapping</li>      
        </ul>
      </div>
    </motion.div>
  )
}

export default Work