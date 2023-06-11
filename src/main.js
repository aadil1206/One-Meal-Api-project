import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Select from 'react-select';

function Main() {
  const [items, setitems] = useState([]);
  const options=[
    {value:1,label:"Turkish"},
    {value:2,label:'Croatian'},
    {value:3,label:'Japanese'},
    {value:4,label:'Filipino'},
    {value:5,label:'Egyptian'},
    {value:6,label:'Tunisian'},
    {value:7,label:'Italian'},
    {value:8,label:'Indian'},
    {value:9,label:'Canadian'}
  ]
  let baseurl="https://www.themealdb.com/api/json/v1/1/search.php?s"
  const [li,setli]=useState("")
 const onchange=(event)=>{
  setli(event.label)
  // console.log(event.label)
 }
 
  const xyz = async ()=>{
    try {
        // const set = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        const set = await axios.get(`${baseurl}`);
        setitems(set.data.meals);
       console.log(set)
      }
     
    catch (error) {
        console.log(error)
    }
  }
 

  useEffect(() => {
    xyz()
  },[]);
 const itemslist = items.filter((item)=>{
  return li.toLowerCase()===""?item: item.strArea.toLowerCase().includes(li.toLowerCase())
  // console.log(li)
  // return li===""?item:item.strArea.includes(li)
 }).map(( item ) => {
  const {strMealThumb,strMeal,idMeal,strInstructions}=item;
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
console.log(itemslist)
  return (<>
    <div className="search">
   <Select options={options} onChange={onchange}
   defaultValue={li}
   />
    </div>
  <div className="items-container">{itemslist}</div>
  <div className="items-container">{itemslist}</div>
  <div className="items-container">{itemslist}</div>
  </>
  );}


export default Main;
