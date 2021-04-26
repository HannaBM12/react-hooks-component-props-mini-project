import React from 'react';
import Article from "./Article"

function ArticleList({articles}){
    // console.log(articles)
    const articlePosts = articles.map(article => 
        <Article key={article.id} date = {article.date} 
        title={article.title} minuets={article.minutes} preview ={article.preview} />)
    return(
        <main>
            {articlePosts}
        </main>
    );

}
export default ArticleList;