import React, { useEffect, useState } from 'react';

function Posts({info, setIsShown}) {

  let [postsInfo, setPostsInfo] = useState([]);

  let searchID = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
            setPostsInfo(response);
          }
        )
        .catch(error => alert(error.message));
  };

  useEffect(() => {
    searchID();
  }, []);

  return (
    <div className='posts'>
        { info === "" ? "" : info < 1 || info > 100 ? "Id has not found" :
        postsInfo.map(element => {
            if(element.id == info) {
              return(
                <div key={element.id}>
                  <p>UserId: {element.userId}</p>
                  <p>Id: {element.id}</p>
                  <p>Title: {element.title}</p>
                  <p>Body: {element.body}</p>
                  <button onClick={() => setIsShown(true)}>Comments</button>
                </div>
              )
            }
        })}
    </div>
  )
}

export default Posts;