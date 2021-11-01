/*******************
Fetch json data
********************/
function executeJSON() {
  // Empty Top Articles text
  document.getElementById("retrievedArticles").innerText = "";

  // UNUSED
  // const url =
  // "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF";

  // UNUSED
  // const url =
  //   "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20100101&end_date=20211031&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF";

  // Grab form values
  let year = document.getElementById("year").value;
  // let endYear = document.getElementById("endYear").value;
  let pageNumber = getRandomInt(10);

  let numRecords = document.getElementById("numRecords").value;

  console.log(numRecords, year);

  // const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${startYear}0101&end_date=${endYear}1231&page=${pageNumber}&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF`;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${year}0101&page=${pageNumber}&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF`;

  $.getJSON(url, function (data) {
    //success
    console.log(data);

    for (let i = 0; i < numRecords; i++) {
      // Display retrieved articles
      // Headline
      document.getElementById("retrievedArticles").innerText +=
        data.response.docs[i].headline.main;
      // Section name
      document.getElementById("retrievedArticles").innerText +=
        data.response.docs[i].section_name;
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
