import React,{useState,useEffect} from 'react';
import './formdesign.css'
import {Button} from 'reactstrap';

export default function Form() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [add1, setadd1] = useState("");
    const [add2, setadd2] = useState("");
    const [gender, setgender] = useState("");
    const [mstatus, setmstatus] = useState("");
    const [favfood, setfavfood] = useState("");
    const [favcolor, setfavcolor] = useState("");
    let data={
        "name": name,
        "email": email,
        "country": country,
        "state": state,
        "city":city,
        "add1":add1,
        "add2":add2,
        "gender":gender,
        "mstatus":mstatus,
        "favfood":favfood,
        "favcolor":favcolor
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:4000/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                         },
                body: JSON.stringify(data),
                })
        .then(response => response.json())
        .then(data => {
                console.log('Success:', data);
                alert("Sent Data!");
            })
        .catch((error) => {
                console.error('Error:', error);
});
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label for="name">Name</label>
                <input type="text" name="name" id='name' onChange={(e)=>setname(e.target.value)}></input>
                <label for="email">Email</label>
                <input type="email" onChange={(e)=>{setemail(e.target.value)}}></input>
                <label for="country">Country</label>
                <input type="text" onChange={(e)=>{setcountry(e.target.value)}}></input>
                <label for="state">State</label>
                <input type="text" onChange={(e)=>{setstate(e.target.value)}}></input>
                <label for="city">City</label>
                <input type="text" onChange={(e)=>{setcity(e.target.value)}}></input>
                <label for="add1">Add Line 1</label>
                <input type="text" onChange={(e)=>{setadd1(e.target.value)}}></input>
                <label for="add2">Add Line 2</label>
                <input type="text" onChange={(e)=>{setadd2(e.target.value)}}></input>
                <label for="gender">Gender</label>
                <input type="text" onChange={(e)=>{setgender(e.target.value)}}></input>
                <label for="mstatus">Marital Status</label>
                <input type="text" onChange={(e)=>{setmstatus(e.target.value)}}></input>
                <label for="favfood">Fav Food</label>
                <input type="text" onChange={(e)=>{setfavfood(e.target.value)}}></input>
                <label for="favcolor">Fav Color</label>
                <input type="text" onChange={(e)=>{setfavcolor(e.target.value)}}></input>
                <Button className="form__button" color="info">Submit</Button>
            </form>
        </div>
    )
}
