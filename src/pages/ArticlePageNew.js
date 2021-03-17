import React, { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';




function ArticlePageNew ({articleName})  {
    const  name  = articleName;

    const articles = [
        {
            name: 'School',
            title: 'Welcome to School Life!!',
            content:  `This is a sample article on School`,
            
        },   
    ];

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

   useEffect(() => {
        const fetchArticleInfo = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        };

        fetchArticleInfo();
    }, [name]);

    const fetchArticleInfoLoad = async () => {
        console.log('loaded');
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        setArticleInfo(body);
    };
   
    return (
        <>
            <h2>{name}</h2>
            <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />

     
        </>
      );

   /* const matchingArticle = articles.find(article => article.name === 'School');
    return matchingArticle ? 
    (
        <>
        <h1>{matchingArticle.title}</h1>
        <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
        {matchingArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
        <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />
        </>
    ) : (
        <h1>Uh oh, looks like that article doesn't exist</h1>
    );*/
};

export default ArticlePageNew;
