import React from "react";
import monent from "moment";
import "./style.scss";

const CommentItem = (props) => {
  const { content, username } = props;
  return (
    <li className="commentitem col-12">
      <p>{username}</p>
      <p>{content}</p>
    </li>
  );
};

export default CommentItem;
