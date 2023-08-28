import './App.css';
import Sunshine from './components/Sunshine';
import Underwater from './components/Underwater';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Projects from './sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Sunshine>
        <About/>
      </Sunshine>

      <Underwater>
        <Projects/>
        <Contact/>
      </Underwater>

    </div>
  );
}

export default App;
