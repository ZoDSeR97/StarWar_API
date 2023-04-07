import { Routes, Route, useNavigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import StarWarAPI from './components/StarWarAPI';
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("people");
  const [id, setID] = useState(1);
  const navigate = useNavigate();

  const lookUp = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={lookUp} className='row'>
          <label>
            Search for:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="people">people</option>
              <option value="planets">planets</option>
              <option value="starships">starships</option>
              <option value="films">films</option>
              <option value="species">species</option>
              <option value="vehicles">vehicles</option>
            </select>
          </label>
          <label>
            ID:
            <input type='number' value={id} onChange={(e) => setID(e.target.value)} />
          </label>
          <button type='submit'>Search</button>
        </form>
        <Routes>
          <Route path="/:category/:id" element={<StarWarAPI />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
