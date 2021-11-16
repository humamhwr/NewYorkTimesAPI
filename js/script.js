/*******************
Fetch json data and display result in "Articles Found"
********************/
function executeJSON() {
  // Empty Top Articles text
  document.getElementById("retrievedArticles").innerText = "";

  // Grab form values
  let year = document.getElementById("year").value;
  let numRecords = document.getElementById("numRecords").value;
  // Randomize page number to choose a random article
  let pageNumber = getRandomInt(10);
  // let pageNumber = 1;

  // URL to API JSON file
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${year}0101&end_date=${year}1231&page=${pageNumber}&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF`;

  $.getJSON(url, function (data) {
    //success
    console.log(data);

    // Display retrieved articles
    for (let i = 0; i < numRecords; i++) {
      // Display headline
      document.getElementById("retrievedArticles").innerText +=
        data.response.docs[i].headline.main;
      // Display section name
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
