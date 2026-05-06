import React from "react";

const LandingPage = () => {
  return (
    <div>
      <nav class="gnb">
        <div class="container">
          <a href="./" class="logo">
            <img
              src="images/판다 얼굴.png"
              alt="logo imge"
              class="logo-image"
            />
            <img src="images/판다마켓.png" alt="logo text" class="logo-text" />
          </a>
          <a href="./html/login.html" class="login-button">
            <div>로그인</div>
          </a>
        </div>
      </nav>

      <main>
        <section class="intro-section">
          <div class="container">
            <div class="intro-text-and-button">
              <h1 class="intro-text big-text">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>
              <a class="cta" href="./html/items.html">
                <div>구경하러 가기</div>
              </a>
            </div>
            <img
              src="images/img_home_top.png"
              alt="intro image"
              class="intro-image"
            />
          </div>
        </section>

        <section class="main-section">
          <div class="container">
            <img
              src="images/Img_home_01.png"
              alt="home image 1"
              class="home-image"
            />
            <div class="slogan">
              <div class="summation-text">Hot item</div>
              <div class="slogan-text-container">
                <h2 class="big-text">
                  인기 상품을
                  <br />
                  확인해 보세요
                </h2>
                <p class="description">
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="main-section">
          <div class="container">
            <div class="slogan">
              <div class="summation-text text-align-right">Search</div>
              <div class="slogan-text-container text-align-right">
                <h2 class="big-text">
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <p class="description">
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
            <img
              src="images/Img_home_02.png"
              alt="home image 2"
              class="home-image"
            />
          </div>
        </section>

        <section class="main-section">
          <div class="container">
            <img
              src="images/Img_home_03.png"
              alt="home image 3"
              class="home-image"
            />
            <div class="slogan">
              <div class="summation-text">Register</div>
              <div class="slogan-text-container">
                <h2 class="big-text">
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <p class="description">
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="outro-section">
          <div class="container">
            <h2 class="outro-text big-text">
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
            <img
              src="images/Img_home_bottom.png"
              alt="intro image"
              class="intro-image"
            />
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="since-text">@codeit - 2024</div>
          <div class="privacy-and-faq">
            <a class="privacy-policy" href="./html/privacy.html">
              Privacy Policy
            </a>
            <a class="faq" href="./html/faq.html">
              FAQ
            </a>
          </div>
          <div class="sns-images">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/ic_facebook.png"
                alt="facebook icon"
                class="sns-icon"
              />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="nooopener noreferrer"
            >
              <img
                src="images/ic_twitter.png"
                alt="twitter icon"
                class="sns-icon"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/ic_instagram.png"
                alt="instagram icon"
                class="sns-icon"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/ic_youtube.png"
                alt="youtube icon"
                class="sns-icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
