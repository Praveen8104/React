import React from "react";
import { ImAmazon, ImAppleinc, ImAndroid } from "react-icons/im";
import "./compo.css";

export default function Compo() {
    return (
        <>
            <div>
                <ImAmazon fontSize="50px" style={{ margin: "10px" }} />
                <ImAppleinc fontSize="50px" style={{ margin: "10px" }} />
                <ImAndroid fontSize="50px" style={{ margin: "10px" }} />
            </div>
            <div className="text">Hai</div>
        </>
    );
}