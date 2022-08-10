import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
   <div className='app-container'>
    <Header/>
    <Search/>
    </div>
    </div>
  );
}

export default App;
