import { useParams } from "react-router";
import axios from 'axios';
import lame from './OIP.jpg';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StarWarAPI = (props)=>{
    const {category} = useParams();
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=> {
                let count = 0;
                let result = [];
                for(let key in response.data){
                    if (count===5)
                        break;
                    else if (count===0)
                        result.push(<h1 key={key}>{response.data.name}</h1>)
                    else
                        result.push(<p key={key}>{key}: {response.data[key]}</p>)
                    count++;
                };
                return [result, response.data];
            })
            .then(async res =>{
                if(category==="people")
                    await axios.get(`https://swapi.dev/api/${String(res[1].homeworld).split("/")[4]}/${String(res[1].homeworld).split("/")[5]}`)
                    .then(response=>res[0].push(<Link to={`/${String(res[1].homeworld).split("/")[4]}/${String(res[1].homeworld).split("/")[5]}`} key="homeworld">
                        Homeworld: {response.data.name}
                    </Link>))
                return res[0]
            })
            .then(result=>setData(result))
            .catch(err => setData([<img key="LAME" src={lame} alt="LAME" />]));
    }, [category, id])

    return(
        <div>
            {data}
        </div>
    )
}

export default StarWarAPI;