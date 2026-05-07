import React, { useState } from "react";
import styles from "./Registeration.module.css";
import { createProduct } from "../../api/ProductsService";
import { useNavigate } from "react-router-dom";

const Registeration = () => {
  const navigate = useNavigate();
  //Input 상태 변수
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  //태그 모음 상태 변수
  const [tags, setTags] = useState([]);

  const onAddTag = (e) => {
    if (e.target.value.trim() == "") return;
    if (tags.includes(e.target.value)) return;
    setTags([...tags, e.target.value]);
  };

  //Input 유효성 검사 문구 상태 변수
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [tagError, setTagError] = useState("");

  const onChangeName = (e) => {
    //해야할 것 : 제출 버튼 클릭 이후, 유효성 검사결과에 따라 에러 문구 보여주기.
    //조건 충족했다면, 에러 문구 없애기.
    //최대 조건을 넘어서 작성할 수 없도록 하기.

    //name을 써야할까, e.target.value를 써야할까? name을 쓰면 비동기 문제가 일어날수도? onChangeName은 name이 업데이트 되거 전 값으로 검증될거임. 그럼 안됨..
    //그러니까 e.target.value를 써야할듯..setName과 똑같은 값을 사용할 수 있도록

    //두번째 고민사항 : 딱 10자를 입력한 후, 입력을 하나 더 하면, value는 11자가 되고, name은 10자임. 그래서 사용자 눈에 보이는 건 10자인데,
    //여기에선 11자로 인식이 되니까, 에러 문구가 계속 남아있어서 좀 이상해보임.
    //그렇다고 사용자의 눈에 보이는 name.length로 하기엔, 10자 이상 입력 시도 시에 에러 문구가 안 뜸.
    //10글자가 있는 상태에서, 입력을 시도한다면 ->에러 문구가 잠깐 보였다가 사라졌으면 좋겠음.

    const value = e.target.value;
    if (value.length < 1) {
      setNameError("상품명은 1자 이상, 10자 이하로 입력해주세요.");
    } else if (value.length > 10) {
      //실제로 name은 10자 이상으로 업데이트 되지 못함. (아래 slice때문) 근데 value는 11자까진 될 수 있음. (1글자만 더 가능한 이유는, 다음 클릭에서 value값이 다시 10으로 초기화되고, 거기에 1이 더해지기 때문. 이게 반복.)
      setNameError("상품명은 1자 이상, 10자 이하로 입력해주세요.");
      setTimeout(() => {
        setNameError("");
      }, 1000); //1초 뒤에 에러 문구 사라지도록 하기.
    } else {
      setNameError(""); //조건 충족 시엔, 다시 빈 값으로 바꾸기.
    }
    if (value.length > 10) {
      setName(value.slice(0, 10));
    }
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;
    if (value.length < 10) {
      setDescriptionError("상품설명은 10자 이상, 100자 이하로 입력해주세요.");
    } else if (value.length > 100) {
      setDescriptionError("상품설명은 10자 이상, 100자 이하로 입력해주세요.");
      setTimeout(() => {
        setDescriptionError("");
      }, 1000); //1초 뒤에 에러 문구 사라지도록 하기.
    } else {
      setDescriptionError(""); //조건 충족 시엔, 다시 빈 값으로 바꾸기.
    }
    if (value.length > 100) {
      setDescription(value.slice(0, 100));
    }
  };
  const onChangePrice = (e) => {
    const value = e.target.value;
    if (value.length < 1 || isNaN(value)) {
      setPriceError("상품 가격은 1자 이상, 숫자로 입력해주세요.");
    } else {
      setPriceError(""); //조건 충족 시엔, 다시 빈 값으로 바꾸기.
    }
  };
  //TODO: 태그의 유효성 검증은, 이곳 말고 다른 곳에서 할 수 있나? 할 수는 있겠지만, 배열을 열어서 한하나 5글자 이하인지 확인해야하는데 너무 번거로운것은 아닐까?
  const onChangeTag = (e) => {
    const value = e.target.value;
    if (value.length < 1) {
      setTagError("태그는 1자 이상, 5자 이하로 입력해주세요.");
    } else if (value.length > 5) {
      setTagError("태그는 1자 이상, 5자 이하로 입력해주세요.");
      setTimeout(() => {
        setTagError("");
      }, 1000); //1초 뒤에 에러 문구 사라지도록 하기.
    } else {
      setTagError(""); //조건 충족 시엔, 다시 빈 값으로 바꾸기.
    }
    if (value.length > 5) {
      setTag(value.slice(0, 5));
    }
  };

  //버튼 활성화 조건. (유효성 검사와 마찬가지)
  const isReadyToSubmit = () => {
    return (
      name.trim() !== "" && description.trim() !== "" && price.trim() !== ""
    );
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    //유효성 검증
    if (
      name.length < 1 ||
      name.length > 10 ||
      description.length < 10 ||
      description.length > 100 ||
      price.length < 1 ||
      isNaN(price)
    ) {
      return;
    }

    //POST 요청 전송
    try {
      const data = await createProduct(name, description, price, tags, images);
      const item = await data.json();
      navigate(`/items/detail/${item.id}`);
    } catch (e) {
      //TODO: 에러 상수 만든 뒤에, 에러 타입에 따라서 처리하기.
      console.log("오류 발생 =>", e.message); //일단 콘솔로 메세지 남기기.
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <div className={styles.header}>
          <h2 className={styles.headerText}>상품 등록하기</h2>
          <button
            className={`${styles.submitBtn} ${!isReadyToSubmit() && styles.disabledSubmitBtn}`}
            type="submit"
            disabled={!isReadyToSubmit() && "disabled"}
          >
            등록
          </button>
        </div>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">상품명</label>
            <div className={styles.inputWithError}>
              <input
                id="name"
                type="text"
                placeholder="상품명을 입력해주세요"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  onChangeName(e);
                }}
                className={nameError && styles.errorBorder}
              />
              <p className={styles.errorText}>{nameError}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="description">상품 소개</label>
            <div className={styles.inputWithError}>
              <textarea
                id="description"
                placeholder="상품 소개를 입력해주세요"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  onChangeDescription(e);
                }}
                className={descriptionError && styles.errorBorder}
              />
              <p className={styles.errorText}>{descriptionError}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="price">판매가격</label>
            <div className={styles.inputWithError}>
              <input
                id="price"
                type="text"
                placeholder="판매가격을 입력해주세요"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  onChangePrice(e);
                }}
                className={priceError && styles.errorBorder}
              />
              <p className={styles.errorText}>{priceError}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="tags">태그</label>
            <div className={styles.inputWithError}>
              <input
                id="tags"
                type="text"
                placeholder="태그를 입력해주세요"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                  onChangeTag(e);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onAddTag(e);
                    setTag("");
                  }
                }}
                className={tagError && styles.errorBorder}
              />
              <p className={styles.errorText}>{tagError}</p>
            </div>

            <div className={styles.tagsContainer}>
              {tags.map((tag, idx) => (
                <span key={tag} className={styles.tagContainer}>
                  <span className={styles.tagText}>{`#${tag}`}</span>
                  <button
                    className={styles.tagDeleteBtn}
                    onClick={() => {
                      setTags(tags.filter((_, i) => i !== idx));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/1000/svg"
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                    >
                      <circle cx="11" cy="12" r="10" fill="#9CA3AF" />
                      <path
                        d="M7.08057 8L15.0806 16"
                        stroke="#F9FAFB"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15 8L7 16"
                        stroke="#F9FAFB"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                    </svg>{" "}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registeration;
