import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';
import { renderStars } from '../../utils/helpers';
import { fetchDataById } from '../../utils/api';

const Detail = ({ onPreviewClick, onDownloadClick }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItem = async () => {
      if (!id) {
        setError('No ID provided');
        setLoading(false);
        return;
      }

      try {
        const data = await fetchDataById(id);
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="detail-container">Loading...</div>;
  }

  if (error) {
    return (
      <div className="detail-container">
        <div className="error-message">Error: {error}</div>
        <button className="back-btn" onClick={handleBackClick}>
          ← Back to Home
        </button>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="detail-container">
        <div className="error-message">Item not found</div>
        <button className="back-btn" onClick={handleBackClick}>
          ← Back to Home
        </button>
      </div>
    );
  }


  return (
    <div className="detail-container">
      <button className="back-btn" onClick={handleBackClick}>
        ← Back to Home
      </button>
      <div className="detail-header">
        <img src={item.imgLink} alt={item.name} className="detail-image" />
        <div className="detail-info">
          <h1 className="detail-title">{item.name}</h1>
          <p className="detail-type">{item.type}</p>
          <p className="detail-upload">ID: {item._id}</p>
        </div>
      </div>

      <div className="detail-content">
       <div className="detail-description">
         <h2>Description</h2>
         <p>{item.shortDescription}</p>
         <p>{item.description}</p>
       </div>

        <div className="detail-screenshots">
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            <img src={item.previewLink} alt="Preview" />
            <img src={item.outputImgLink} alt="Output Image" />
            <img src={item.imgLink} alt="Main Image" />
          </div>
        </div>

        <div className="detail-actions">
          <button className="preview-btn" onClick={() => window.open(item.previewLink, '_blank')}>
            Preview
          </button>
          <button className="download-btn" onClick={() => window.open(item.downloadLink, '_blank')}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;