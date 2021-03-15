import React, { useContext, useEffect, useRef, useState } from "react";
import getCommentsApi from "../../api/getCommetsApi";
import postComment from "../../api/postCommentApi";
import { DataContext } from "../../GlobalState";
import Btnclick from "../btnclick";
import CommentItem from "../commentItem";
import "./style.scss";

const Comment = (props) => {
  const state = useContext(DataContext);
  const [isAuth, setIsAuth] = state.auth;
  const [comments, setComments] = useState([]);

  const contentRef = useRef();

  const commentSubmit = () => {
    const createdAt = new Date().toDateString();
    const content = contentRef.current.innerHTML;
    if (isAuth === null) setIsAuth(JSON.parse(localStorage.getItem("user")));

    postComment
      .postComment({ isAuth, content, createdAt, stream_key: props.stream_key })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    contentRef.current.innerHTML = "";
  };

  useEffect(() => {
    getCommentsApi
      .get(props.stream_key)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="comment">
      <ul className="comment__body">
        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment._id}
              username={comment.isAuth.username}
              content={comment.content}
              time={comment.createdAt}
            />
          );
        })}
      </ul>
      <div className="comment__send">
        <div
          className="comment__text"
          type="text"
          contentEditable="true"
          tyle={{
            height: "100px",
            border: "1px solid #ccc",
            padding: "5px 10px",
            outline: "none",
          }}
          ref={contentRef}
        />
        <Btnclick
          content="Send"
          className="comment__submit"
          click={commentSubmit}
        />
      </div>
    </div>
  );
};

export default Comment;