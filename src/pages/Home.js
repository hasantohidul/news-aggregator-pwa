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
    <div className="container mx-auto px-4 py-6">
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
