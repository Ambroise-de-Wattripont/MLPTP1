import logo from './logo.svg';
import './App.css';

function App() {

  function Submit() {
    alert('Sucess!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
            </label>
            <button onClick={Submit}>Submit</button>
        </form>
        
          
        </p>
      </header>
    </div>
  );
}

export default App;
