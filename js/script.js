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

  // URL to API JSON file
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${year}0101&end_date=${year}1231&page=${pageNumber}&api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF`;

  $.getJSON(url, function(data) {
    //success
    console.log(data);

    // Display retrieved articles
    for (let i = 0; i < numRecords; i++) {
      // Display headline

      let retrievedArticle = document.createElement("P");
      let t = document.createTextNode(data.response.docs[i].headline.main);
      retrievedArticle.appendChild(t);
      document.getElementById("retrievedArticles").appendChild(retrievedArticle);
      retrievedArticle.classList.add("StyleArticle");

      let retrievedArticleSec = document.createElement("P");
      let t1 = document.createTextNode(data.response.docs[i].section_name);
      retrievedArticleSec.appendChild(t1);
      document.getElementById("retrievedArticles").appendChild(retrievedArticleSec);
      retrievedArticleSec.classList.add("StyleArticleSec");
    }
  })


//fail
.fail(function() {
  console.log("error");
});
}

// Pull random integer given the maximum number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
