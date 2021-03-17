import React from 'react';
import AddCommentForm from './AddCommentForm';

const CommentsList = ({ comments, articleName, setArticleInfo }) => (
    <>
    <h3>Comments:</h3>
    
    <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />
    </>
);

export default CommentsList;