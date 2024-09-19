import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=39228e54c18e4c04a5f90d7a10f749dc"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No articles found");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div>
        {articles.length > 0 ? (
          articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))
        ) : (
          <p>No articles available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
