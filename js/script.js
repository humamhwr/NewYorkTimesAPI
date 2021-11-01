/*******************
Fetch json data
********************/
function executeJSON() {
  // const url =
  // "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF";

  // const url =
  //   "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20100101&end_date=20211031&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF";

  let startYear = document.getElementById("startYear").value;
  let endYear = document.getElementById("endYear").value;
  let pageNumber = getRandomInt(10);

  let numRecords = document.getElementById("numRecords").value;

  console.log(numRecords, startYear, endYear);

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${startYear}0101&end_date=${endYear}1231&page=${pageNumber}&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF`;

  $.getJSON(url, function (data) {
    //success
    console.log(data);
    // for (let i = 0; i < data.response.docs.length; i++) {
    for (let i = 0; i < numRecords; i++) {
      console.log(data.response.docs[i].headline.main);
    }
  })
    //fail
    .fail(function () {
      console.log("error");
    });
}

// Pull random integer given the maximum number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
