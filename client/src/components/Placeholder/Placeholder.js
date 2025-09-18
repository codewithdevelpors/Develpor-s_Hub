import React, { useState } from 'react';
import './Placeholder.css';
import { renderStars, isTrending } from '../../utils/helpers';
import { TRENDING_RATING_THRESHOLD } from '../../constants/themes';

const Placeholder = ({ item, onNextClick }) => {
  const isItemTrending = isTrending(item.rating, TRENDING_RATING_THRESHOLD);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="placeholder-card">
      {isItemTrending && (
        <div className="trending-badge">
          <span>🔥 Trending</span>
        </div>
      )}
      <div className="placeholder-image">
        {imageError ? (
          <div className="image-placeholder">
            <span>📷</span>
            <p>Image not available</p>
          </div>
        ) : (
          <img
            src={item.imgLink}
            alt={item.name}
            onError={handleImageError}
          />
        )}
      </div>
      <div className="placeholder-content">
        <h3 className="file-name">{item.name}</h3>
        <p className="file-type">{item.type}</p>
        <div className="rating">
          {renderStars(item.rating)}
        </div>
        <p className="category">{item.category}</p>
        <p className="short-description">{item.shortDescription}</p>
        <button className="next-btn" onClick={() => onNextClick(item)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Placeholder;