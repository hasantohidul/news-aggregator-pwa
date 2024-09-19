import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=39228e54c18e4c04a5f90d7a10f749dc"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
        <div>
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    </div>
  )
};

export default Home;