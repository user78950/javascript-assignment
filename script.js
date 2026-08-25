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

