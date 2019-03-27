"use strict";
let returnHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const singleVal = index === 0 ? `<h1 class="author">${author}</h1>` : "";
  returnHtml += `${singleVal}<div class="title">${title}</div><div class="desc">${description}</div><div class="publish">${publishedAt}</div><div class="img"><a href="${url}" target="_blank"><img class="pic" src=${urlToImage} /></a></div>`;
};
class fetchdata {
  FetchingNews(url) {
    let data = {};
    fetch(url)
      .then(res => res.json())
      .then(item => {
        data = item;
        let elementId = document.getElementById("news");
        data.articles.forEach((item, index) => getResults(item, index));
        elementId.insertAdjacentHTML("afterbegin", returnHtml);
      })
      .catch(error => {
        console.error("Something went wrong on server", error);
      });
  }
}
const instance = new fetchdata();
export default instance;
