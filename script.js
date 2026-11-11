// 01. 영화 한 편의 데이터를 객체로 만들기


const movie = [
  {id : 1, title : "인셉션", voteAverage : 8.4, voteCount : 35000, releaseDate : "2010-07-15", isFavorite : false}
];


console.log(movie[0].title);
console.log(movie[0].voteAverage);
console.log(movie[0].isFavorite);


// 02. 평점에 따라 영화 분류하기

if (movie[0].voteAverage >= 8) {
  console.log("추천 영화");
}


else {
  console.log("일반 영화");
}


// 03. 여러 조건을 함께 사용하기

if (movie[0].voteAverage >= 8 && movie[0].voteCount >= 30000) {
  console.log("인기 추천 영화");
}


else {
  console.log("일반 영화");
}



