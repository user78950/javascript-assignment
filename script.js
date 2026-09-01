
// 01. 기본 파일 준비하기

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const url = "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR";

// 03. fetch()로 서버에 Request 보내기

async function getNowPopularMovies() {
  const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=ko-KR", options);
  console.log(response);


// 04. Response의 데이터 사용하기

  const data = await response.json()

  console.log(data.results)

// 05. 첫 번째 영화 가져오기

  const firstMovie = data.results[0];

  console.log(firstMovie);

// 06. 영화 제목과 평점 가져오기

  const {title, vote_average} = firstMovie;

  console.log(`제목 : ${title}`);
  console.log(`평점 : ${vote_average}`);

}

getNowPopularMovies();



// async function getNowPlaying() {}

// getNowPlaying();
