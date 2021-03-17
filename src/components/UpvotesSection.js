import React from 'react';

function UpvotesSection  ({ upvotes, articleName, setArticleInfo })  {
    const upvoteArticle = async () => {
        const response = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await response.json();
        //const body = { upvotes: 1, comments: [] };
        setArticleInfo(body);
    };

    return (
        <div id="upvotes-section">
            <button onClick={() => {
                upvoteArticle();
            }}>Add Upvote</button>
            <p>This article has {upvotes} upvotes</p>
        </div>
    );
}

export default UpvotesSection;