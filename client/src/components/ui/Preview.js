import React, { useState } from 'react';
import './Preview.css';

const Preview = ({ item, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Mock total pages

  // Mock file content - 20 lines per page
  const generateFileContent = (page) => {
    const lines = [];
    for (let i = 1; i <= 20; i++) {
      lines.push(`Line ${(page - 1) * 20 + i}: This is sample content for the file preview.`);
    }
    return lines;
  };

  const fileContent = generateFileContent(currentPage);

  const handleCopy = () => {
    const content = fileContent.join('\n');
    navigator.clipboard.writeText(content);
    alert('Content copied to clipboard!');
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <div className="preview-header">
          <div className="preview-file-info">
            <div className="file-icon">📄</div>
            <div className="file-details">
              <h3>{item.fileName}</h3>
              <span>{item.fileType}</span>
            </div>
          </div>
          <div className="preview-controls">
            <span className="page-indicator">
              Page {currentPage} of {totalPages}
            </span>
            <button className="copy-btn" onClick={handleCopy}>
              Copy
            </button>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <div className="preview-body">
          <div className="file-content">
            {fileContent.map((line, index) => (
              <div key={index} className="content-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="preview-footer">
          <button
            className="nav-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-btn ${page === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="nav-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;