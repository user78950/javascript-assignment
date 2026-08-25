// 02. 영화 정보 함수 만들기


const getMovieMessage = (movieTitle, voteAverage) => {
  return `${movieTitle}의 평점은 ${voteAverage}점입니다.`;

}

const movieTitle = "인셉션";
const voteAverage = 8.4;

// 03. 함수의 반환값 사용하기

const message = getMovieMessage("인셉션", 8.4);

console.log(message);

// 04. 제목 변경하기.

const title = document.querySelector(".title");

console.log(title.textContent);

title.textContent ="오늘의 추천 영화";

console.log(title.textContent);

// 05. 설명 영역 강조하기

const description = document.querySelector(".description");

description.classList.add("text-primary","fw-bold");

// 06. 함수의 반환값을 화면에 표시하기

const movieList = document.querySelector("#movie-list");

const card = document.createElement("div");

card.textContent = getMovieMessage(movieTitle, voteAverage);

card.classList.add("card","border","rounded","p-3","mb-2");

movieList.append(card);

