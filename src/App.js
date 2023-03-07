import './App.css';
import { Banner } from './components/Banner';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div id="nav">
          <Nav />
        </div>        

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Banner />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />          
        </Routes>  

        <div id="footer">       
          <Footer />
        </div>
      </div>      
    </Router>
  );
}

export default App;
