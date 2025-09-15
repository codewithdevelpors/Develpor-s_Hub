import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Download.css';

const Download = ({ item }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!isDownloading) {
      startDownload();
    }
  }, [countdown, isDownloading]);

  useEffect(() => {
    if (isDownloading && downloadProgress < 100) {
      const progressTimer = setTimeout(() => {
        setDownloadProgress(prev => Math.min(prev + 10, 100));
      }, 500);
      return () => clearTimeout(progressTimer);
    }
  }, [isDownloading, downloadProgress]);

  const startDownload = () => {
    setIsDownloading(true);
  };

  const handleManualStart = () => {
    if (!isDownloading) {
      startDownload();
    }
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
    <div className="download-container">
      <button className="back-btn" onClick={handleBackClick}>
        ← Back to Home
      </button>
      <div className="download-header">
        <h1>Download {item.fileName}</h1>
      </div>

      <div className="download-content">
        <div className="download-item-card">
          <div className="download-image">
            <img src={item.img} alt={item.fileName} />
          </div>
          <div className="download-info">
            <h2>{item.fileName}</h2>
            <p className="file-type">{item.fileType}</p>
            <div className="rating">
              {renderStars(item.rating)}
            </div>
            <p className="uploading-data">{item.uploadingData}</p>
            <p className="short-description">{item.shortDescription}</p>
          </div>
        </div>

        <div className="download-section">
          {!isDownloading ? (
            <div className="countdown-section">
              <h3>Download will start automatically in:</h3>
              <div className="countdown-timer">
                {countdown}
              </div>
              <p>Or <button className="manual-start-btn" onClick={handleManualStart}>click here</button> to start now</p>
            </div>
          ) : (
            <div className="download-progress-section">
              <h3>Downloading...</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
              <p className="progress-text">{downloadProgress}% complete</p>
              {downloadProgress === 100 && (
                <div className="download-complete">
                  <h4>Download Complete!</h4>
                  <p>Your file has been downloaded successfully.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Download;