import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const SearchForm = (props) =>{
    const [category, setCategory] = useState("people");
    const [id, setID] = useState(1);
    const navigate = useNavigate();

    const lookUp = (e)=>{
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }
    return(
        <form onSubmit={lookUp} className='row'>
            <label>
                Search for: 
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
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
                <input type='number' value={id} onChange={(e)=>setID(e.target.value)}/>
            </label>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchForm;