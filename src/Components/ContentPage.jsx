import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';

const ContentPage = (props) => {
  const [posts, setPosts] = useState([
    {
      username: props.activeUser,
      imgName: "post__image",
      image: require("./assets/images/food1.jpg"),
      caption: "wow food!"
    },
    {
      username: props.activeUser,
      imgName: "post__image",
      image: require("./assets/images/food2.jpg"),
      caption: "wow food!"
    },
    
  ]);
  return (
    <div>
      <Header/>
      {
        posts.map(post => (
          <Post 
            username={post.username}
            imgName={post.imgName}
            image={post.image}
            caption= {post.caption}
          />
        ))
      }
    </div>
  );
};

export default ContentPage;