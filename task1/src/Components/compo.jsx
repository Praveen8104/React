import React from "react";
import {ImAppleinc, ImAndroid, ImGithub} from "react-icons/im";
import { FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa";
import "./compo.css";

export default function Compo() {
    return (
        <>
            <div>
                <FaGoogle fontSize="30px" style={{ margin: "10px" }} />
                <ImAndroid fontSize="30px" style={{ margin: "10px" }} />
                <ImAppleinc fontSize="30px" style={{ margin: "10px" }} />
            </div>
            <div className="text">
                <div className="text1">Hello</div>
                <div className="text2">Aditya</div>
            </div>
            <div>
                <ImGithub fontSize="30px" style={{ margin: "10px" }} />
                <FaLinkedin fontSize="30px" style={{ margin: "10px" }} />
                <FaTwitter fontSize="30px" style={{ margin: "10px" }} />
            </div>
        </>
    );
}