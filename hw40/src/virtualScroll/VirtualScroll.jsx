import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Item({data, rowHeight, visibleRows}) {
  const rootRef = useRef();
  const [start, setStart] = useState(0);
  
  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeigth() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }

  useEffect(() => {
    function onScroll(e) {
      setStart(Math.min(
        data.length - visibleRows - 1,
        Math.floor(e.target.scrollTop / rowHeight)
      ));
    }
    rootRef.current.addEventListener('scroll', onScroll);
    return () => {
      rootRef.current.removeEventListener('scroll', onScroll);
    }
  }, [data.length, visibleRows, rowHeight]);

  return (
    <div className="content" style={{height: rowHeight * visibleRows + 1, overflow: 'auto'}} ref={rootRef}>
      <div style={{height: getTopHeight()}}/>
      <ul>
        {data.slice(start, start + visibleRows + 1).map((item, index) =>
          (<li 
            style={{height: rowHeight}}
            key={start + index} 
          >item {item}</li>)
        )}
      </ul>
      <div style={{height: getBottomHeigth()}}/>
    </div>
  )
}

export default Item;