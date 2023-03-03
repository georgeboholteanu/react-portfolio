import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">  
      <Header/>   
      <Banner/>   
      <Nav/>   
      <About/>   
      <Work/>   
      <Contact/>   
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
