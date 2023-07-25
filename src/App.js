import './App.css';
import Sunshine from './components/Sunshine';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
//import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Sunshine>
        <About/>
      </Sunshine>
      {/* <Skills/> */}
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
