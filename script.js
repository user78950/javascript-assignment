
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



}

getNowPopularMovies();



// async function getNowPlaying() {}

// getNowPlaying();
