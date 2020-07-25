import React from 'react';
import './Styles/postCard.css';
import ProfileToken from './ProfileToken';

const PostCard = () => {
  return (
    <div>
      {/* header -> avatar and username */}
      {/* image */}

      {/* username + caption */}

      {/* ========placeholders========== */}
      <div className="postCard__userTopline">
        <ProfileToken
          name="postCard__avatar"
          image={require("./assets/images/sunsetChef_avatar.jpg")}
        />
        <span className="postCard__username">username{/* This will be a prop */}</span> 
      </div>

      <img className="postCard__image1" src={require("./assets/images/food1.jpg")} alt="picture of food"/>
      
      {/* username + caption */}
      <div className="postCard__captionLine">
        <span className="postCard__captionUsername">
        {/* This will be a prop */}
        username
        </span>
        <span className="postCard__caption">
        {/* This will be a prop */}
        wow food!
        </span>

      </div>
    </div>
  );
};

export default PostCard;