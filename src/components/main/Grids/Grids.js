import { useEffect, useState } from "react";
import "./Grids.css";

function Grids() {
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch('https://reactjs-cdp.herokuapp.com/movies').then(res=>res.json()).then(result=>setData(result.data))
  },[])
  return <div className="grids-wrapper">
    {data.length > 0 && data.map(el=>{
      return (
      <div className="card" key={el.id}>
        <h3>{el.title}</h3>
        <img src={el.poster_path} alt={el.title}/>
        <h6>{el.genres.map((el,i)=><span key={el+i}>{el} </span>)}</h6>
      </div>)
      })}
  </div>;
}

export default Grids;
