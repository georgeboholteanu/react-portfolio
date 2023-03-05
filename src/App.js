import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />          
        </Routes>             
        <Footer />
      </div>      
    </Router>
  );
}

export default App;
