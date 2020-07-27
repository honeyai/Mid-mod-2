import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, database } from '../firebase';

const ImageUpload = (props) => {

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  // const 

  const handleChange = event => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadEvent = storage.ref(`images/${image.name}`).put(image);
    uploadEvent.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error(error => error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()// upload event has already stored the file, but in order for my code to use this file in a post I need a url at which to access the image
          .then(url => {
            database.collection('Posts').add({
              timestamp: database.firestore.FieldValue.serverTimestamp(), //after it all happens we collect a universal time of which we can organize the most recent posts.
              caption: caption,
              image: url,
              username: props.displayName,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          })
      }
    )
  };

  return (
    <div>
      <progress value={progress} max="100"/>
      <input type="text" placeholder="Relive this moment..." onChange={event => setCaption(event.value)} value={caption} />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;