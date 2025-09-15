import React from 'react';
import './Placeholder.css';
import { renderStars, isTrending } from '../../utils/helpers';
import { TRENDING_RATING_THRESHOLD } from '../../constants/themes';

const Placeholder = ({ item, onNextClick }) => {
  const isItemTrending = isTrending(item.rating, TRENDING_RATING_THRESHOLD);

  return (
    <div className="placeholder-card">
      {isItemTrending && (
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