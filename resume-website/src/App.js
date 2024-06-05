import logo from './logo.svg';
import './App.css';
import WebGLScene from './WebGLScene1';

function App() {
  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Sean Collins Resume 2024 data-4.pdf`, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header"> Hello World
      </header>
      <button onClick={openResume}>Resume</button>
      <WebGLScene />
    </div>
  );
}

export default App;
