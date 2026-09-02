const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  // TODO 1. title, vote_average, poster_path를 구조 분해 할당으로 가져오세요.

  const {title, vote_average, poster_path} = movie;

  // TODO 2. movie-card 클래스를 가진 div 요소를 만드세요.

  const card = document.createElement("div");
  const className = "movie-card";


  // TODO 3. 포스터 img 요소를 만들고 src와 alt를 설정하세요.
  // poster_path가 없으면 대체 이미지를 사용하세요.

  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `https://placehold.co/500x750?text=No+Image${poster_path}`

  const poster = document.createElement("img");
  poster.src = posterUrl;
  poster.alt = `${title} 포스터`

}

getTopRatedMovies();
