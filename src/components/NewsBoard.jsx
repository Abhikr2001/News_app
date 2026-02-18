import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category = "general" }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = "346fdd156f71d5936a2a6e0f1924fe41";

      const gnewsUrl = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&lang=en&apikey=${API_KEY}`;

      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        gnewsUrl
      )}`;

      const res = await fetch(proxyUrl);
      const data = await res.json();

      setArticles(data.articles || []);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row">
        {articles.map((news, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
