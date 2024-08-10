import React from 'react'
import Child from './child'
import image from '../assets/images.png'

function Parent() {

    const studentDetails = {
        name: 'Ragnor',
        place: 'Kattegat',
        wife: 'Lagertha'
    }

    const arr = [4, 2, 0, 5]

    function handleClick(name) {
        console.log("Hai" + " " + name);
    }

    return (
        <>
            <div className='cards'>
                <Child name="Praveen" roll={20} college="ACOE" studentDetails={studentDetails} image={image} arr={arr} handleClick={handleClick} />
            </div>
        </>
    )
}

export default Parent
