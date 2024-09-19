import React from "react";

const NewsCard = ({article}) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">{article.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
        <a className="text-blue-500 hover:underline" href={article.url} target="_blank">Read More</a>
    </div>
);


export default NewsCard;