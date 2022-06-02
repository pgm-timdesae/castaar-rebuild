import React from 'react'
import styles from '../../styles/Home.module.scss';

const Hero = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>
        Castaar<span className={styles.dot}>.</span>
        </h1>

        <span className={styles.dot}>X</span>
        <span className={styles.dot}>X</span>
      </div>
    </>

  )
}

export default Hero