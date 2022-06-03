import React, {useEffect} from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const Services = () => {

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
        x: '100vw',
      });
    }
  }, [inView])

  return (
    <motion.div layout
      ref={ref}
      className={styles.services}
      >
      <motion.div
        className={styles.services__img}
        animate={animation}
      >
        <Image src="/images/advertising.png" alt="Our box" width={719} height={696}></Image>
        <h2 className={styles.hashtag}><span className={styles.dot}>#</span>ciaonormal</h2>
      </motion.div>

      <div
        className={styles.services__text}
      >
        <h3 className={styles.smalltitle}>What we do <span className={styles.primaryText}>?</span></h3>
        <h2 className={styles.subtitle}>Advertising<span className={styles.dot}> .</span></h2>
        <p className={styles.paragraph}>
        Merkstrategie / Brandstrategie / Diepte-interviews / Marktonderzoek/ Digitale strategie / Merkpositionering / Reclamecampagnes / Concepten / Digitale strategie / Marktonderzoek / Copywriting / Content strategie (Brainstorm, Advies) / Content creatie (Fotografie, Copywriting, Storytelling) / Radio- & tv scripts met uitvoering / Presentaties / Magazine concepten / Video / SEA & SEO / Sociale media advertising / Blogposts / Influencer marketing / Externe nieuwsbrieven / Interne communicatie (Nieuwsbrieven, Bedrijfspresentaties, Employer branding, Jaarverslagen) / …          
        </p>
      </div>
    </motion.div>
  )
}

export default Services