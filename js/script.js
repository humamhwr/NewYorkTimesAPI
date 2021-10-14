/*******************
Fetch json data


********************/

function execute() {
  const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=SAiMm3TGavwAZGVZQQXSSYnpj8jUUIdF";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      return response.text().then((err) => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then((data) => {
      console.log(data);
      // console.log(data.status);
      // console.log(data.response.docs[0].abstract);
    })
    .catch((err) => {
      console.error(err);
    });
}
