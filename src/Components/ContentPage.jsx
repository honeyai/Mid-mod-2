import React from 'react';
import Header from './Header';
import Post from './Post';

const ContentPage = (props) => {
  return (
    <div>
      <Header/>
      <Post
        username={props.activeUser}
        imgName="post__image1"
        image={require("./assets/images/food1.jpg")}
        caption="wow food!"
        />
      {/* <Post/>
      <Post/>
      <Post/> */}
    </div>
  );
};

export default ContentPage;