import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import styles from "./TeacherLogin.module.css";

function TeacherLogin() {
  return (
    <div className={styles.teacherLogin}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb3de9a6a0bcd941490476cca2734c3c82d59ca99e2a2463ad4764abb343a51?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
            alt="Teacher login illustration"
            className={styles.loginImage}
          />
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TeacherLogin;