//======products========
const BASE_URL_PRODUCTS = "http://localhost:4000/products";
export const getProductList = async (page, pageSize, keyword) => {
  try {
    const response = await fetch(
      `${BASE_URL_PRODUCTS}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`GET: productList =>`, result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`);
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`GET: products =>`, result);
    return result;
  } catch (e) {
    alert(e);
  }
};

//스프린트5
export const createProduct = async (
  name,
  description,
  price,
  tags = [],
  images = "default",
) => {
  //이미지는 들어오지 않으면, default값으로 저장됨. (기본 이미지를 띄워주기.)
  //TODO: default를 상수로 빼기

  //유효성 검사 (간단히)
  if (name.trim() === "" || description.trim() === "" || price.trim() === "") {
    //TODO: 에러 상수 목록을 만들기.
    throw new Error("상품명, 상품 설명, 가격은 필수 입력 사항입니다.");
  }

  const requestBody = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`POST: products =>`, result);
    return result; //여기에서 반환!
  } catch (e) {
    alert(e);
  }
};

export const patchProduct = async (modifiedProduct, id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log("PATCH: product =>", result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log("DELETE: product =>", result);
    return result;
  } catch (e) {
    alert(e);
  }
};
