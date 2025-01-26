import React from "react";
import "./sidbar.css";
import Past_Product from "../parts_did_bar/past";
import Hot from "../parts_did_bar/hot";

export default function Sidbar(){
    return(
        <div className="sidbar">
                <Past_Product/>
                <Hot/>
        </div>
    )
}
