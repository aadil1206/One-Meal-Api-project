import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function Main() {
  const [items, setitems] = useState([]);
  const xyz = async ()=>{
    try {
        const set = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        setitems(set.data.meals);
        console.log(set)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    xyz()
  },[]);
 const itemslist = items.map(( item ) => {
  const {strMealThumb,strMeal,idMeal}=item;
    return (
      <div className="card">
        <img src={strMealThumb} alt="hello" />
        <div className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </div>
      </div>
    );
  });

  return (<>
    
  <div className="items-container">{itemslist}</div>
  </>
  )
}

export default Main;
