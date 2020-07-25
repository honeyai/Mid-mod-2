import React from 'react';
import './Styles/post.css';
import ProfileToken from './ProfileToken';

const Post = (props) => {
  return (
    <div className="post__container">
        <div className="post__topline">
          <ProfileToken name="post__avatar" image={require("./assets/images/sunsetChef_avatar.jpg")} />
          <span className="post__toplineUsername">{props.username}</span>
        </div>

        <img className={props.imgName} src={props.image} alt="" />

        {/* username + caption */}
        <div className="post__captionLine">
          <span className="post__captionUsername">{props.username}</span>
          <span className="post__caption">
            {props.caption}
          </span>
        </div>
    </div>
  );
};

export default Post;