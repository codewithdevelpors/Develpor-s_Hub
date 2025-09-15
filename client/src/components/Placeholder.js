import React from 'react';
import './Placeholder.css';

const Placeholder = ({ item, onNextClick }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const isTrending = item.rating >= 4.5;

  return (
    <div className="placeholder-card">
      {isTrending && (
        <div className="trending-badge">
          <span>🔥 Trending</span>
        </div>
      )}
      <div className="placeholder-image">
        <img src={item.img} alt={item.fileName} />
      </div>
      <div className="placeholder-content">
        <h3 className="file-name">{item.fileName}</h3>
        <p className="file-type">{item.fileType}</p>
        <div className="rating">
          {renderStars(item.rating)}
        </div>
        <p className="uploading-data">{item.uploadingData}</p>
        <p className="short-description">{item.shortDescription}</p>
        <button className="next-btn" onClick={() => onNextClick(item)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Placeholder;