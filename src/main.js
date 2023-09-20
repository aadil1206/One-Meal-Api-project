import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Select from 'react-select';
import Slider2 from "./Slider2";

function Main() {
  const onchange1=(e)=>{
    setquery(e.target.value)
    xyz()
  }
  const [limit ,setlimit]=useState(14)
  const [items, setitems] = useState([]);
  var [query,setquery]=useState("Vegan")
   
  const onchange12=()=>{
   setlimit(limit=>limit+10)
   xyz()
  }
  let baseurl=`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`
  const [li,setli]=useState("")
  
 const onchange=(event)=>{
  setli(event.label)
  // console.log(event.label)
 }
 
  const xyz = async (query,limit)=>{
    try {
        // const set = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        const set = await axios.get(`${baseurl}`);
        setitems(set.data.hits);
       console.log(items)
       console.log(set)
      }
     
    catch (error) {
        console.log(error)
    }
  }
 

  useEffect(() => {
    xyz();
  },[]);
  
console.log(query)
  return (<>
   <input placeholder="type here" onChange={onchange1} className="inp"/>
   <div className="n1">
  {
    items.map((item)=>{
      const { image, label, mealType } = item?.recipe

      return (
        <div className="new">
        <img src={image} alt={label} className="img" />
        <p className="p">{mealType}</p>
        </div>
       
      )
    })
  }
  </div>
  <button className="b1" onClick={onchange12}> show more</button> 
 <Slider2 items1 ={items}/>
  </>
  );}


export default Main;
