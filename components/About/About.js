import React, {useEffect} from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const About = () => {

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
      className={styles.about}
      >
      <motion.div
        className={styles.about__img}
        animate={animation}
      >
        <h2 className={styles.subtitle}>In Our Box <span className={styles.dot}>. . .</span></h2>
        <Image src="/images/box.png" alt="Our box" width={645} height={405}></Image>
        <h2 className={styles.subtitle}>We think <br/> outside <br/> the box<span className={styles.dot}> .</span></h2>
      </motion.div>

      <div
        className={styles.about__text}
      >
        <div className={styles.container}>
          <h3 className={styles.smalltitle}>Who are we?</h3>
          <p>
          Castaar is een advertising, graphic design, print & digital Agency…
          Think outside the box they say… <br/>
          We just burn that fucking box!<br/>
          </p>

          <p>
            Die doos telkens weer in brand steken, dat doen we natuurlijk niet zonder reden. Bij Castaar willen we dat onze klanten gezien worden en groeien. Daarom zijn we creatieve trendsetters met een allergie aan alles wat traditioneel is. Als one-stop-shop voor klanten die geen tijd te verliezen hebben doen we zoveel mogelijk.
          </p>

          <p>
            Van A tot Z. Ons uiteindelijke doel? De reclamesector domineren en op z’n grondvesten laten daveren. We willen de beste zijn in alles wat we aanbieden en doen als relatief klein bureau niet onder voor de ‘grote jongens’.
          </p>

          <p>
            Met hard werk en een disruptieve insteek, creëren we voor onze klanten visibiliteit die torenhoog uitsteekt boven de piles of shit aan visuele middelmaat.
          </p>

          <p className={styles.primaryText}>
            XXX
            Bizzekes.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About