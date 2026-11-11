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


// 04. 삼항 연산자로 찜 버튼 문구 만들기

const favoriteButtonText = movie[0].isFavorite ? "찜 해제" : "찜 하기";
console.log(favoriteButtonText);



// 05~06. 영화 3개 배열 및 객체에서 원하는 값 가져오기


const movies = [
  {id : 1, title : "인셉션", voteAverage : 8.4, voteCount : 35000, releaseDate : "2010-07-15", isFavorite : false},
  {id : 2, title : "인터스텔라", voteAverage : 8.7, voteCount : 25000, releaseDate : "2014-11-05", isFavorite : false},
  {id : 3, title : "테넷", voteAverage : 7.3, voteCount : 25000, releaseDate : "2020-08-26", isFavorite : false}

];


console.log(movies[0].title);
console.log(movies[1].voteAverage);
console.log(movies[2].releaseDate);
console.log(movies.length);


// 07. 영화 데이터 수정하고 추가하기


const movies = [
  {id : 1, title : "인셉션", voteAverage : 8.4, voteCount : 35000, releaseDate : "2010-07-15", isFavorite : false},
  {id : 2, title : "인터스텔라", voteAverage : 8.7, voteCount : 25000, releaseDate : "2014-11-05", isFavorite : false},
  {id : 3, title : "테넷", voteAverage : 7.3, voteCount : 25000, releaseDate : "2020-08-26", isFavorite : false}

];

movies[0].voteAverage = 8.5;


movies.push({
  id : 4, title : "다크 나이트", voteAverage : 9.0, releaseDate :  "2008-07-16"
});

console.log(movies[0].voteAverage);
console.log(movies);
console.log(movies.length);
