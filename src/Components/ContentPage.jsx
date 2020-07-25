import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';
import { useEffect } from 'react';
import {database} from '../fireBase';

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

  //useEffect -> runs code with specific conditions
  useEffect(() => {
    //code
    database.collection('Posts').onSnapshot(snapShot) //onSnapshot is a listener. anytime the Posts database is modified it takes a snapshot this will fire.
  
  }, []); //<< adding [] means run this code only once. Why does it mean that tho?

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