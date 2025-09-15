import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = ({ item, onPreviewClick, onDownloadClick }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

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

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={handleBackClick}>
        ← Back to Home
      </button>
      <div className="detail-header">
        <img src={item.img} alt={item.fileName} className="detail-image" />
        <div className="detail-info">
          <h1 className="detail-title">{item.fileName}</h1>
          <p className="detail-type">{item.fileType}</p>
          <div className="detail-rating">
            {renderStars(item.rating)}
          </div>
          <p className="detail-upload">{item.uploadingData}</p>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-description">
          <h2>Description</h2>
          <p>{item.shortDescription}</p>
          <p>
            This is a more detailed description of the file. It provides comprehensive information
            about the content, features, and usage of this particular item. You can find all the
            necessary details here to make an informed decision about downloading or previewing
            this file.
          </p>
        </div>

        <div className="detail-screenshots">
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            <img src="https://via.placeholder.com/400x300?text=Screenshot+1" alt="Screenshot 1" />
            <img src="https://via.placeholder.com/400x300?text=Screenshot+2" alt="Screenshot 2" />
            <img src="https://via.placeholder.com/400x300?text=Screenshot+3" alt="Screenshot 3" />
          </div>
        </div>

        <div className="detail-actions">
          <button className="preview-btn" onClick={() => onPreviewClick(item)}>
            Preview
          </button>
          <button className="download-btn" onClick={() => onDownloadClick(item)}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;