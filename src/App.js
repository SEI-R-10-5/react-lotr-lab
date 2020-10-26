import logo from './logo.svg'
import './styles/App.css'
import Movie from './components/Movie'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Movie title="The Fellowship of the Ring" hours={2} minutes={58} />
      </header>
    </div>
  )
}

export default App
