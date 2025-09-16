import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Download from './pages/Download/Download';
import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Preview from './components/Preview/Preview';
import { ThemeProvider } from './contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function AppContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <Home
              onItemClick={handleItemClick}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
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
              <div className="error-page">
                <h2>No Item Selected</h2>
                <p>Please select an item first before downloading.</p>
                <button onClick={() => navigate('/')} className="back-home-btn">
                  Go Back Home
                </button>
              </div>
            )
          } />
        </Routes>
      </main>
      <Footer />
      {previewItem && (
        <Preview item={previewItem} onClose={closePreview} />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
