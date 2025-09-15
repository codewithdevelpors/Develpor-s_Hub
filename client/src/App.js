import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import Download from './components/Download';
import Preview from './components/Preview';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate('/detail');
  };

  const handlePreviewClick = (item) => {
    setPreviewItem(item);
  };

  const handleDownloadClick = (item) => {
    setSelectedItem(item);
    navigate('/download');
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home onItemClick={handleItemClick} />} />
        <Route path="/detail" element={
          selectedItem ? (
            <Detail
              item={selectedItem}
              onPreviewClick={handlePreviewClick}
              onDownloadClick={handleDownloadClick}
            />
          ) : (
            <div>Please select an item first</div>
          )
        } />
        <Route path="/download" element={
          selectedItem ? (
            <Download item={selectedItem} />
          ) : (
            <div>Please select an item first</div>
          )
        } />
      </Routes>
      {previewItem && (
        <Preview item={previewItem} onClose={closePreview} />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
