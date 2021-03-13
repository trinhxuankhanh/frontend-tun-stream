import React from "react";
import monent from "moment";
import "./style.scss";

const CommentItem = (props) => {
  const { content, username, time } = props;
  return (
    <li className="commentitem">
      <p>
        {username} <span>{monent(time).fromNow()}</span>
      </p>
      <p>{content}</p>
    </li>
  );
};

export default CommentItem;
