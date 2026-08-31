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




