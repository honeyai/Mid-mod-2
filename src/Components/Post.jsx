import React from 'react';
import './Styles/post.css';
import ProfileToken from './ProfileToken';

const Post = () => {
  return (
    <div className="post__container">
        {/* header -> avatar and username */}
        {/* image */}

        {/* username + caption */}

        {/* ========placeholders========== */}
        <div className="post__topline">
          <ProfileToken
            name="post__avatar"
            image={require("./assets/images/sunsetChef_avatar.jpg")}
          />
          <span className="post__toplineUsername">username{/* This will be a prop */}</span>
        </div>

        <img className="post__image1" src={require("./assets/images/food1.jpg")} alt="picture of food" />

        {/* username + caption */}
        <div className="post__captionLine">
          <span className="post__captionUsername">
            {/* This will be a prop */}
          username
          </span>
          <span className="post__caption">
            {/* This will be a prop */}
          wow food!
          </span>
        </div> {/* end of post__captionLine */}
    </div>
  );
};

export default Post;