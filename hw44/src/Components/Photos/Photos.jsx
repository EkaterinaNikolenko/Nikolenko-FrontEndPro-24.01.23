import React from 'react';
import './Photos.css';
import { useParams } from 'react-router-dom';

function Photos({ photos }) {
    // debugger;
    let { slug } = useParams();
    let albumPhotos = [];
    photos.forEach(element => {
        // for(let obj in element) {
        //     if(obj.albumId == slug) {
        //         albumPhotos.push(element);
        //     }
        // }
        if(element.albumId == slug) {
            albumPhotos.push(element);
        }
    });
  return (
    <div className='photos'>
        {albumPhotos && albumPhotos.map((user, index) => {
        return (
          <div className="albumPhotos" key={index}>
            <p>id: {user.id}</p>
            <img src={user.url}/>
            <img src={user.thumbnailUrl}/>
            <p>title: {user.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Photos;