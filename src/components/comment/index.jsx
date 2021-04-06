import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import getCommentsApi from "../../api/getCommetsApi";
import postComment from "../../api/postCommentApi";
import emoticon from "../../asset/img/emoticons.svg";
import { DataContext } from "../../GlobalState";
import Btnclick from "../btnclick";
import CommentItem from "../commentItem";
import "./style.scss";

const Comment = (props) => {
  const state = useContext(DataContext);
  const [isAuth, setIsAuth] = state.auth;
  const [comments, setComments] = useState([]);
  const contentRef = useRef(null);
  const statusCheckBox = useRef(null);

  const handleOnChange = () => {
    const emoji = document.getElementsByClassName("emoji-mart");
    emoji[0].style.display = statusCheckBox.current.checked ? "block" : "none";
  };

  const handleOnClickPicker = (emoji) => {
    contentRef.current.value += emoji.native;
  };

  const commentSubmit = () => {
    const createdAt = new Date().toDateString();
    const content = contentRef.current.value;
    if (isAuth === null) setIsAuth(JSON.parse(localStorage.getItem("user")));

    postComment
      .postComment({ isAuth, content, createdAt, stream_key: props.stream_key })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    contentRef.current.value = "";
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
      <ul className="comment__body row w-100">
        <ScrollableFeed>
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
        </ScrollableFeed>
      </ul>
      <div className="comment__send">
        <input className="comment__text" type="text" ref={contentRef} />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <label className="btn" htmlFor="hidden">
            <img src={emoticon} />
          </label>
          <input
            type="checkbox"
            id="hidden"
            ref={statusCheckBox}
            onChange={handleOnChange}
            className="hidden"
          />
          <Btnclick
            content="Send"
            className="comment__submit"
            click={commentSubmit}
          />
          <Picker
            onClick={handleOnClickPicker}
            set="facebook"
            theme="dark"
            style={{
              position: "absolute",
              bottom: "100%",
              right: "0",
              display: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
