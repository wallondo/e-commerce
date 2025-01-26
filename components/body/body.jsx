import React from "react";
import "./body.css";
import Sidbar from "../sidbar/sidbar";
import Body_body from "../body_body/body_body";

export default function Body(){
    return(
        <div className="body body_main">
                <Sidbar/>
                <Body_body/>
        </div>
    )
}
