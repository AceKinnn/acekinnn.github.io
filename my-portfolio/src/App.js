import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path as necessary
import Portfolio from './pages/Portfolio'; // Make sure to create this page component
import About from './pages/About'; // Create About page
import Blog from './pages/Blog'; // Create Blog page

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;