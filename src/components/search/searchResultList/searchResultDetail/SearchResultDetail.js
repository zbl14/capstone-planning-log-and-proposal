import React, { useState } from "react";
import CommentList from "./commentList/CommentList";
import NewCommentForm from "./commentList/NewCommentForm";

const SearchResultDetail = (props) => {
  const business = props.business;
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainCommentList, setMainCommentList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  };

  const handleAddingNewCommentToList = (newComment) => {
    const newMainCommentList = mainCommentList.concat(newComment);
    setMainCommentList(newMainCommentList);
    setFormVisibleOnPage(false);
  };

  let curVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    curVisibleState = (
      <NewCommentForm onNewCommentCreation={handleAddingNewCommentToList} />
    );
    buttonText = "Return to Comment List";
  } else {
    curVisibleState = <CommentList commentList={mainCommentList} />;
    buttonText = "Add Comment";
  }

  return (
    <React.Fragment>
      <h1>Reviews of {business.name}</h1>
      {curVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
};

export default SearchResultDetail;
