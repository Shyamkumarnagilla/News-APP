import React, { useState, useEffect, useRef } from 'react';

const Card = ({ data }) => {
  const [failedImages, setFailedImages] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef({});

  const handleImageError = (index) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(cardRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        if (!curItem.image_url || failedImages.has(index)) return null;
        return (
          <div 
            className={`card ${visibleCards.has(String(index)) ? 'visible' : ''}`}
            key={index}
            ref={(el) => cardRefs.current[index] = el}
            data-index={index}
          >
            <img 
              src={curItem.image_url} 
              alt={curItem.title}
              onError={() => handleImageError(index)}
            />
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
