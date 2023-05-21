import React, { useEffect, useState } from 'react';

function Comments({info, isShown}) {

  let [commentsInfo, setCommentsInfo] = useState([]);

  function commentsId () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(response => {
            setCommentsInfo(response);
          }
        )
        .catch(error => alert(error.message));
  };

  useEffect(() => {
    commentsId();
  }, []);

  return (
    <div className='comments'>
      {isShown && commentsInfo.map(element => {
            if(element.postId == info) {
              return(
                <div key={element.id}>
                  <p>PostId: {element.postId}</p>
                  <p>Id: {element.id}</p>
                  <p>Name: {element.name}</p>
                  <p>Email: {element.email}</p>
                  <p>Body: {element.body}</p>
                </div>
              )
            }
        })}
    </div>
  )
}

export default Comments;