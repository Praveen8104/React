import React from 'react'
import image from '../assets/images.png'

function Rendering() {
    const flag = false

    // if (flag === true) {
    //     return (
    //         <>
    //             <div style={{ display: "flex", flexDirection: "column" }}>
    //                 <h1>Hai Frnds😉</h1>
    //                 <img src={image} alt="" width={100} height={100} style={{ margin: "auto" }} />
    //             </div>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <h1>Bye Frnds😏</h1>
    //         </>
    //     )
    // }

    return (
        flag ?
            <div>
                <h1>True</h1>
            </div> :
            <div>
                <h1>False</h1>
            </div>
    )

    // return (
    //     <>
    //         <div>
    //             <h1>{`${flag ? 'True' : 'False'}`}</h1>
    //         </div>
    //     </>
    // )

}

const Render2 = () => {
    const flag = true
    return (
        <>
            <div>
                <h1>Render 2</h1>
                <p>{
                    !flag && <h1> True </h1>
                    
                }</p>
                {flag && <h1>False</h1>}
            </div>
        </>
    )
}
export default Render2
