import React, { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';




function ArticlePageNew ({articleName})  {
    const  name  = articleName;

    const articles = [
        {
            name: 'React',
            title: 'Welcome to School Life!!',
            content:  `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`,
            
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
   
    const matchingArticle = articles.find(article => article.name === name);
    return (
        <>
            <h2>{name}</h2>
            <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            <p>{matchingArticle.content}</p>
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
