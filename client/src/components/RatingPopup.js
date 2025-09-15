import React, { useState } from 'react';
import './RatingPopup.css';

const RatingPopup = ({ item, onClose, onRate }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onRate(item.id, selectedRating);
      onClose();
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (hoveredRating || selectedRating);
      stars.push(
        <button
          key={i}
          className={`rating-star ${isFilled ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          ★
        </button>
      );
    }
    return stars;
  };

  return (
    <div className="rating-overlay" onClick={onClose}>
      <div className="rating-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rating-header">
          <h2>Rate this item</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="rating-content">
          <div className="item-preview">
            <img src={item.img} alt={item.fileName} />
            <div className="item-info">
              <h3>{item.fileName}</h3>
              <p>{item.fileType}</p>
            </div>
          </div>

          <div className="rating-section">
            <p className="rating-prompt">How would you rate this item?</p>
            <div className="stars-container">
              {renderStars()}
            </div>
            <div className="rating-labels">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>

          <div className="rating-actions">
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={selectedRating === 0}
            >
              Submit Rating
            </button>
            <button className="skip-btn" onClick={onClose}>
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;