"use strict";

const list = document.querySelector(".list");
const input = document.querySelector(".footer__text");
const addBtn = document.querySelector(".footer__btn");

/**
 * add버튼 클릭시 onAdd 함수 실행
 */
addBtn.addEventListener("click", onAdd);

/**
 * 사용자입력함수
 */
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text == "") {
    input.focus();
    return;
  }

  // 2. 새로운 아이템을 만듦 (텍스트 + 삭제 버튼)
  const row = createItem(text);

  // 3. list 컨테이너 안에 새로 만든 아이템을 추가 한다.
  list.appendChild(row);

  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });

  // 5. 인풋을 초기화한다.
  input.value = "";
  input.focus();
}

/**
 * elemente 생성 함수
 */
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "itemrow");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.57143 7V4.8C8.57143 4.32261 8.75204 3.86477 9.07353 3.52721C9.39502 3.18964 9.83106 3 10.2857 3H13.7143C14.1689 3 14.605 3.18964 14.9265 3.52721C15.248 3.86477 15.4286 4.32261 15.4286 4.8V7M19 7L18 19.2C18 19.6774 17.8194 20.1352 17.4979 20.4728C17.1764 20.8104 16.7404 21 16.2857 21H7.71429C7.25963 21 6.82359 20.8104 6.5021 20.4728C6.18061 20.1352 6 19.6774 6 19.2L5 7H19Z" stroke="#14181F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 7H5.77778H20" stroke="#14181F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 11V16" stroke="#14181F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 11V16" stroke="#14181F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  deleteBtn.addEventListener("click", () => {
    list.removeChild(itemRow);
  });

  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);

  return itemRow;
}

/**
 * enter입력시 추가되게하는 이벤트
 */
input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    onAdd();
  }
});
