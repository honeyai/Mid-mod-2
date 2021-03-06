import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';
import { useEffect } from 'react';
import {database} from '../firebase';
import ImageUpload from './ImageUpload';
import './Styles/contentPage.css'

const ContentPage = (props) => {
  const [posts, setPosts] = useState([]);
  //useEffect -> runs code with specific conditions
  useEffect(() => {
    //onSnapshot is a listener. anytime the Posts database is modified it takes a snapshot this will fire.
    database.collection('Posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    }) 
  }, []); //<< adding [] means run this code only once. Why does it mean that tho?

  return (
    <div className="contentPage__wrapper">
      <Header name="contentPage__logoutButton" element={props.element}/>
      {
        posts.map(({id, post}) => (
          <Post 
            key={id} //this allows the page to only render the new post as opposed to all of them
            username={post.username}
            imgName={post.imgName}
            image={post.image}
            caption= {post.caption}
          />
        ))
      }
      <ImageUpload displayName={props.userInfo}/>
    </div>
  );
};

export default ContentPage;