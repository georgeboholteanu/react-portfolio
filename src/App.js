import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="bg-site">  
    //   <Header/>   
    //   <Banner/>   
    //   <Nav/>
    //   <Home/>   
    //   <About/>   
    //   <Work/>   
    //   <Contact/>   
    //   <div className='h-[4000px]'></div>
    // </div>
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
      </div>
    </Router>
  );
}

export default App;
