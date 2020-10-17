import React,{useState,useEffect} from 'react'
import './customTable.css'

export default function ViewData() {
  let a=[1,2,3,4,5];

  const [state, setstate] = useState([])

useEffect(()=>{
  async function fetchData(){
    let fetcher=await fetch('http://localhost:4000/');
    let fetcherData=await fetcher.json();
    await setstate(fetcherData);
  }
  fetchData();
},[]);



//console.log(state);

  return (
    <div>
      <table>
<thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Country</th>
    <th>State</th>
    <th>City</th>
    <th>Add1</th>
    <th>Add2</th>
    <th>Gender</th>
    <th>Mstatus</th>
    <th>Fav Food</th>
    <th>Fav Color</th>
  </tr>
</thead>
<tbody>
  {state.map((element,index)=>{
    return(
      <tr>
      <td key={index}>{element.name}</td>
      <td key={index}>{element.email}</td>
      <td key={index}>{element.country}</td>
      <td key={index}>{element.state}</td>
      <td key={index}>{element.city}</td>
      <td key={index}>{element.add1}</td>
      <td key={index}>{element.add2}</td>
      <td key={index}>{element.gender}</td>
      <td key={index}>{element.mstatus}</td>
      <td key={index}>{element.favfood}</td>
      <td key={index}>{element.favcolor}</td>
      </tr>
    )
  })}
</tbody>
      </table>
    </div>
  )
}
