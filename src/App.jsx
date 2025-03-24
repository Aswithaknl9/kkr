import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Bar/Navbar';
import Home from './Pages/Home';
import Footer from './Bar/Footer';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
