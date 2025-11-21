// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

function App() {
  return (
    // Remove Router wrapper since it's now in main.jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;