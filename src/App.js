import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SearchForm from "./components/SearchForm";
import StarWarAPI from './components/StarWarAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<SearchForm/>}/>
            <Route path="/:category/:id" element={<div><SearchForm /><StarWarAPI /></div>} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
