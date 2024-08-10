import React from 'react'
import '../Props/child.css'

function Child(props) {
    const { name, roll, college, studentDetails, image } = props;
    console.log(studentDetails);

    return (
        <>
            <div>
                <p>Name : {name}</p>
                <p>RollId : {roll}</p>
                <p>College : {college}</p>
                <img src={image} alt="nothing" width='100px' height='100px'/>
            </div>
        </>
    )
}

export default Child

