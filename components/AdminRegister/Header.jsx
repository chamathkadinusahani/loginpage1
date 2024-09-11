import React from 'react';
import styles from './AdminRegister.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle} />
        <div className={styles.schoolName}>ABC School</div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactButton}>Contact Us</div>
        <div className={styles.phoneContainer}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0d578bb609e7a14fb1d8305628f3c31cfeaa1c3414303977ba221b34531fba?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.phoneIcon} alt="" />
          <div className={styles.phoneNumber}>(011) 2345 567</div>
        </div>
      </div>
    </header>
  );
}

export default Header;