import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        if (!curItem.image_url) return null;
        return (
          <div className='card' key={index}>
            <img src={curItem.image_url} alt={curItem.title} />
            <div className='content'>
              <a className='title' onClick={() => window.open(curItem.link)}>
                {curItem.title}
              </a>
              <p>{curItem.description}</p>
              <button onClick={() => window.open(curItem.link)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
