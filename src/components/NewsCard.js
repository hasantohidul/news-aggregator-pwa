import React from "react";

const NewsCard = ({article}) => (
    <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank">Read More</a>
    </div>
);


export default NewsCard;