import './styles/App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Download from './pages/Download';
import Preview from './components/Preview/Preview';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function AppContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/detail/${item._id}`);
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
      <Routes>
        <Route path="/" element={<Home onItemClick={handleItemClick} />} />
        <Route path="/detail/:id" element={
          <Detail
            onPreviewClick={handlePreviewClick}
            onDownloadClick={handleDownloadClick}
          />
        } />
        <Route path="/download" element={
          selectedItem ? (
            <Download item={selectedItem} />
          ) : (
            <div>Please select an item first</div>
          )
        } />
      </Routes>
      <Footer />
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
