import React from 'react';
import styles from '../../styles/Home.module.scss';
import Lottie from 'react-lottie';
import animationData from "../../public/lotties/scroll.json";

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

        <div className={styles.scrollIcon}>
          <Lottie 
          options={defaultOptions}
          height={75}
          width={75}
          />
        </div>

        <span className={styles.dot}>X</span>
        <span className={styles.dot}>X</span>
      </div>
    </>

  )
}

export default Hero