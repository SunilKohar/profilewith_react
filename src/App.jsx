import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='app-level'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
