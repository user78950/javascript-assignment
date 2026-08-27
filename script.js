// 01. 영화 데이터 준비하기


const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
  {
    title: "테넷",
    voteAverage: 7.3,
  },
];

// 02. find()로 영화 찾기

const foundMovie = movies.find((movie) => {
  return movie.textContent = `${movies[1].title}의 평점은 ${movies[1].voteAverage}점입니다.`
});

console.log(foundMovie);

// 03. filter()로 평점이 높은 영화 찾기

const highRatedMovies = movies.filter((movie) => {
  return movie.voteAverage >= 8.5;
});

console.log(highRatedMovies);





