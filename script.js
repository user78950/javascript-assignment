const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

// 01. 객체 구조 분해 할당하기

const title = movie.title;
const voteAverage = movie.vote_average;

console.log(`제목 : ${title}`);
console.log(`평점 : ${voteAverage}`);


// 02. 새로운 변수 이름으로 할당하기

const firstMovie = movie;
const {title : movieTitle} = firstMovie;
console.log(movieTitle);


// 03. 배열 구조 분해 할당하기

const [firstGenre, secondGenre] = genres;

console.log(firstGenre, secondGenre);

// 04. 존재하지 않는 속성 안전하게 가져오기

const director = movie.detail?.director;

console.log(director);

//05. 기본값 사용하기

const directorName = movie.detail.director??"감독 정보 없음";

console.log(directorName);

// 06. || 와 ??의 차이 확인하기

const voteCount = 0;

console.log(voteCount || 100); // falsy(틀린 값)을 사용했기 때문에 0이 아니라 100이 나온다.
console.log(voteCount ?? 100); // undefined 혹은 null이 아니기 때문에 그래서 0으로 나옴

