var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

var searchTermQ = "christmas"; // this will be the search input

var apiKey = "&api-key=WLf22500vU4LEWrjmQIDk4uSX5bTog1u";

var limit = "limit=1"; // number of articles shown, needs to be completed link to Pagination: https://developer.nytimes.com/docs/articlesearch-product/1/overview

$.ajax({
  url: queryURL + searchTermQ + apiKey, // + limit

  method: "GET"
}).then(function(response) {
  var results = response.data;
  console.log(response);
});
