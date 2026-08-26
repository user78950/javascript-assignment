// 02. 버튼의 Click Event 처리하기

const recommendBtn = document.querySelector("#recommend-button");

const recommendResult = document.querySelector("#recommend-result");

recommendBtn.addEventListener("click",(event) =>{
  console.log(event);
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});


// 03. Form 제출 처리하기

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit",(event) =>{
  event.preventDefault();
  const value = searchInput.value.trim();

  if (value !== "") {
    const item = document.createElement("p");
    item.textContent = `검색한 영화는 : ${value}`
    searchResult.append(item);
    searchInput.value = ""; // 05. 검색 후 Input 비우기
  }

});








