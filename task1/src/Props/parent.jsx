import React from 'react'
import Child from './child'
import image from '../assets/images.png'

function Parent() {

    const studentDetails = {
        name: 'Ragnor',
        place: 'Kattegat',
        wife: 'Lagertha'
    }

    return (
        <>
            <div className='cards'>
                <Child name="Praveen" roll={20} college="VIT" studentDetails={studentDetails} image={image} />
            </div>
        </>
    )
}

export default Parent
