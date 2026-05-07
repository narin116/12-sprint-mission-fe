import React from "react";
import styles from "./Footer.module.css";
import icFacebook from "/src/assets/images/ic_facebook.png";
import icInstagram from "/src/assets/images/ic_instagram.png";
import icTwitter from "/src/assets/images/ic_twitter.png";
import icYoutube from "/src/assets/images/ic_youtube.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sinceText}>@codeit - 2024</div>
        <div className={styles.privacyAndFaq}>
          <a className={styles.privacyPolicy} href="./html/privacy.html">
            Privacy Policy
          </a>
          <a className={styles.faq} href="./html/faq.html">
            FAQ
          </a>
        </div>
        <div className={styles.snsImages}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icFacebook}
              alt="facebook icon"
              className={styles.snsIcon}
            />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <img
              src={icTwitter}
              alt="twitter icon"
              className={styles.snsIcon}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icInstagram}
              alt="instagram icon"
              className={styles.snsIcon}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icYoutube}
              alt="youtube icon"
              className={styles.snsIcon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
