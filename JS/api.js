import instance from "./index.js";
const API_KEY = `acfe6a939a5642678d8ea20b50748780`;
const channel = "bbc-news";
const URL = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;
instance.FetchingNews(URL);
