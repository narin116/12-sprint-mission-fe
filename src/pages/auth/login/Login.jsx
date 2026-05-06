import React from "react";
import styles from "../auth.module.css";

import btnVisibilityOff from "/src/assets/images/login/btn_visibility_off_24px.png";
import btnVisibilityOn from "/src/assets/images/login/btn_visibility_on_24px.svg";
import pandaFace from "/src/assets/images/login/판다 얼굴.png";
import pandaLogo from "/src/assets/images/login/판다마켓.png";
import googleLogo from "/src/assets/images/login/google.png";
import kakaotalkLogo from "/src/assets/images/login/kakaotalk.png";

const Login = () => {
  return (
    <div>
      <main class={styles.loginMain}>
        <div class={styles.loginContainer}>
          <a class={styles.loginLogoContainer} href="./">
            <img src={pandaFace} alt="판다 로고 얼굴" />
            <img src={pandaLogo} alt="판다 로고 글씨" />
          </a>
          <div class={styles.contentContainer}>
            <form class={styles.loginForm} action="/submit" method="POST">
              <div class={styles.inputContainer}>
                <div class={styles.emailContainer}>
                  <label for="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>
                <div class={styles.passwordContainer}>
                  <label for="password">비밀번호</label>
                  <div class={styles.passwordInputContainer}>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="비밀번호를 입력해주세요"
                      required
                    />
                    <img class={styles.invisibleIcon} src={btnVisibilityOff} />
                    <img class={styles.visibleIcon} src={btnVisibilityOn} />
                  </div>
                </div>
              </div>

              <button class={styles.loginButton} type="submit">
                <div class={styles.loginText}>로그인</div>
              </button>
            </form>
            <div class={styles.easyLogin}>
              <div class={styles.easyLoginContainer}>
                <div class={styles.easyLoginText}>간편 로그인하기</div>
                <div class={styles.snsImgContainer}>
                  <a
                    class={styles.google}
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={googleLogo} alt="google logo image" />
                  </a>
                  <a
                    class={styles.kakaotalk}
                    href="https://www.kakaocorp.com/page/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={kakaotalkLogo} alt="kakaotalk logo image" />
                  </a>
                </div>
              </div>
            </div>

            <div class={styles.askLoginSignupContainer}>
              <span class={styles.askText}>판다마켓이 처음이신가요?</span>
              <a class={styles.loginSignupLink} href="./signup.html">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
