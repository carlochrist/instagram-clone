import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Syzon" src="" />
        <h3>Username</h3>
      </div>

      {/* header -> avatar + username */}

      <img
        className="post__image"
        src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp"
      ></img>
      {/* image */}

      <h4 className="post__text">
        <strong>syzon:</strong> caption
      </h4>

      {/* username + caption */}
    </div>
  );
}

export default Post;
