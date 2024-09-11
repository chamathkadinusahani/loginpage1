import React from 'react';
import styles from './TeacherRegister.module.css';

const TeacherRegister = () => {
  return (
    <div className={styles.teacherRegister}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon} />
          <div className={styles.schoolName}>ABC School</div>
        </div>
        <div className={styles.contactInfo}>
          <button className={styles.contactButton}>Contact Us</button>
          <div className={styles.phoneWrapper}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe136d7af6ea98d9e56a2b8ab8dacce4a4a90485ba4eaac1cbed827bed10c752?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.phoneIcon} alt="" />
            <div className={styles.phoneNumber}>(011) 2345 567</div>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb4ccf4c4c6f344c47254f91c1d9897d471ef88a58699cc9d9a8d7668bf47e6d?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.mainImage} alt="Teacher registration illustration" />
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <h1 className={styles.formTitle}>REGISTER</h1>
              <div className={styles.segmentedButtons}>
                <button className={`${styles.segmentButton} ${styles.segmentStart}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>student</div>
                  </div>
                </button>
                <button className={`${styles.segmentButton} ${styles.segmentMiddle}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>teacher</div>
                  </div>
                </button>
                <button className={`${styles.segmentButton} ${styles.segmentEnd}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>admin</div>
                  </div>
                </button>
              </div>
              <form>
                <div className={styles.inputField}>
                  <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
                  <div className={styles.inputWrapper}>
                    <input id="firstName" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
                  <div className={styles.inputWrapper}>
                    <input id="lastName" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="teacherId" className={styles.inputLabel}>Teacher Id</label>
                  <div className={styles.inputWrapper}>
                    <input id="teacherId" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="password" className={styles.inputLabel}>Password</label>
                  <div className={styles.inputWrapper}>
                    <input id="password" className={styles.inputInner} type="password" />
                  </div>
                </div>
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0052b51e86b3f95416e210dc9aae4b6282655bd638403f6702d8ff00999a15e0?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.footerBackground} alt="" />
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <div className={styles.schoolLogo} />
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.contactDetails}>
                <address className={styles.address}>
                  12th street,<br />
                  Kumarathunga Mawatha,<br />
                  Colombo 07<br />
                  Sri Lanka<br />
                </address>
                <a href="#" className={styles.directions}>Directions &gt;</a>
                <div className={styles.officeInfo}>
                  School Office: <span>(011) 234 5567</span><br />
                  e-mail: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                </div>
                <a href="#" className={styles.contactLink}>Contact Us &gt;</a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <nav className={styles.quickLinks}>
                <ul className={styles.linkList}>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Course Details</a></li>
                  <li><a href="#">Student Bio</a></li>
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">Login</a></li>
                </ul>
                <h2 className={styles.linkTitle}>Quick links</h2>
              </nav>
            </div>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96e0ee8cde05ebf69f1aee2d1dd1250a547e412a24554aa993df325d4f50236?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.footerLogo} alt="ABC School logo" />
        <div className={styles.footerBottom}>
          <div>ABC School 2011 | All Rights Reserved</div>
          <div>Website by: Team 1 Frithcode Training Progame</div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherRegister;