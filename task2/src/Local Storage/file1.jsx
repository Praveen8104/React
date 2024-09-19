import React, { useEffect, useState } from 'react'
import './file1.css'

function File1() {

    const [userData, setUserData] = useState({
        name: '',
        age: '',
        phnum: '',
        location: ''
    });

    const addUser = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    if(!localStorage.getItem("userdata")){
        localStorage.setItem("userdata",JSON.stringify([]));
    }
    
    const submitData = (e) => { 
        const pre = JSON.parse(localStorage.getItem("userdata"));
        pre.push(userData);
        localStorage.setItem("userdata",JSON.stringify(pre));
    }
    
    console.log(localStorage.getItem("userdata"));

    return (
        <>
            <form>
                <input type="text" placeholder="Enter your name" name='name' onChange={addUser}/><br></br>
                <input type="text" placeholder="Enter your age" name='age' onChange={addUser}/><br></br>
                <input type="text" placeholder="Enter your phnum" name='phnum' onChange={addUser}/><br></br>
                <input type="text" placeholder="Enter your location" name='location' onChange={addUser}/><br></br>
                <input type="submit" value="Submit" onClick={submitData} />
            </form>
        </>
    )
}

export default File1
