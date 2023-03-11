import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../header/header";
import Item from "../item/item";

const Main=()=>{
    const[oldSchool,setoldSchool] = useState([])
    const[bestSeller,setbestSeller] = useState([])

useEffect(()=>{
    axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=>{
  setoldSchool(oldSchool.data.data)
    }).catch(()=>{

    }).finally(()=>{

    });
    axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=>{
    setbestSeller(bestSeller.data.data)

}).catch(()=>{

}).finally(()=>{

})
},[])
    return(
<>
<Header/>
<section>
    <article>Best Sellers</article>
    {bestSeller.map((item,key)=> {
        return <Item item={item.attributes} key={key} />    
        })}
    <article>Old School</article>
    {oldSchool.map((item,key)=> {
    return <Item item={item.attributes} key={key}/>
     })}
</section>
</>
    )
}
 export default Main;