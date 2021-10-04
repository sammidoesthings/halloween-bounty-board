import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Monster Hunter Job Board</h1>
       
        <div className="job-listings">
          INSERT SEVERAL MONSTER CARDS HERE
        </div>

        <div className="sightings-app">
          HAVE YOU SEEN A MONSTER?
          Submission Form
        </div>

        <div className="sightings-posted">
          MAKE SIGHTINGS SHOW UP HERE WHEN SUBMITTED
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
