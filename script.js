// 02. 영화 정보 함수 만들기


const getMovieMessage = (movieTitle, voteAverage) => {
  return `${movieTitle}의 평점은 ${voteAverage}점입니다.`;

}

const movieTitle = "인셉션";
const voteAverage = 8.4;

// 03. 함수의 반환값 사용하기

const message = getMovieMessage("인셉션", 8.4);

console.log(message);


