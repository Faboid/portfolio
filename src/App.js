import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
//import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <About/>
      {/* <Skills/> */}
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
