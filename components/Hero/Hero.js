import React from 'react';
import styles from '../../styles/Home.module.scss';
import Lottie from 'react-lottie';
import animationData from "../../public/lotties/scroll.json";
import Image from 'next/image';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div>
        <h1 className={styles.title}>
        Castaar<span className={styles.dot}>.</span>
        </h1>

        <div className={styles.heroImg}>
          <Image src="/images/castaar-new.png" alt="Team" width='1920' height='1080' />
        </div>

        <div className={styles.scrollIcon}>
          <Lottie 
          options={defaultOptions}
          height={75}
          width={75}
          />
        </div>
      </div>
    </>

  )
}

export default Hero