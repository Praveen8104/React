import React from 'react'
import '../Props/child.css'

function Child(props) {
    const { name, roll, college, studentDetails, image, arr, handleClick } = props;
    console.log(studentDetails);
    console.log(arr);


    return (
        <>
            <div>
                <p>Name : {name}</p>
                <p>RollId : {roll}</p>
                <p>College : {college}</p>
                <img src={image} alt="nothing" width='100px' height='100px' />
                <button onClick={ () => handleClick("Aditya")}>Click Me</button>
            </div>
        </>
    )
}

export default Child

