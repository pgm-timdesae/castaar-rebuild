import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';


const Team = () => {
  return (
    <div className={styles.team}>
      <p>Team</p>
        <Image src="/images/castaar-team.jpeg" alt="Team" width='1920' height='1280' objectFit='cover' />
    </div>
    
  )
}

export default Team