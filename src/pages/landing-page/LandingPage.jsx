import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

import pandaFace from "/src/assets/images/판다 얼굴.png";
import pandaLogo from "/src/assets/images/판다마켓.png";
import introImage from "/src/assets/images/img_home_top.png";
import homeImage1 from "/src/assets/images/Img_home_01.png";
import homeImage2 from "/src/assets/images/Img_home_02.png";
import homeImage3 from "/src/assets/images/Img_home_03.png";
import homeImage4 from "/src/assets/images/Img_home_bottom.png";

const LandingPage = () => {
  return (
    <div>
      <nav class={styles.gnb}>
        <div class={styles.container}>
          <Link class={styles.logo} to="/">
            <img src={pandaFace} alt="logo imge" class={styles.logoImage} />
            <img src={pandaLogo} alt="logo text" class={styles.logoText} />
          </Link>
          <Link to="/auth/login" class={styles.loginButton}>
            <div class={styles.loginText}>로그인</div>
          </Link>
        </div>
      </nav>

      <main>
        <section class={styles.introSection}>
          <div class={styles.container}>
            <div class={styles.introTextAndButton}>
              <h1 class={styles.introText}>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>
              <Link to="/items" class={styles.cta}>
                <div>구경하러 가기</div>
              </Link>
            </div>
            <img src={introImage} alt="intro image" class={styles.introImage} />
          </div>
        </section>

        <section class={styles.mainSection}>
          <div class={styles.container}>
            <img src={homeImage1} alt="home image 1" class={styles.homeImage} />
            <div class={styles.slogan}>
              <div class={styles.summationText}>Hot item</div>
              <div class={styles.sloganTextContainer}>
                <h2 class={styles.bigText}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </h2>
                <p class={styles.description}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class={styles.mainSection}>
          <div class={styles.container}>
            <div class={styles.slogan}>
              <div class={styles.summationText} style={{ textAlign: "right" }}>
                Search
              </div>
              <div
                class={styles.sloganTextContainer}
                style={{ textAlign: "right" }}
              >
                <h2 class={styles.bigText}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <p class={styles.description}>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
            <img src={homeImage2} alt="home image 2" class={styles.homeImage} />
          </div>
        </section>

        <section class={styles.mainSection}>
          <div class={styles.container}>
            <img src={homeImage3} alt="home image 3" class={styles.homeImage} />
            <div class={styles.slogan}>
              <div class={styles.summationText}>Register</div>
              <div class={styles.sloganTextContainer}>
                <h2 class={styles.bigText}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <p class={styles.description}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class={styles.outroSection}>
          <div class={styles.container}>
            <h2 class={styles.outroText}>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
            <img src={homeImage4} alt="intro image" class={styles.introImage} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
