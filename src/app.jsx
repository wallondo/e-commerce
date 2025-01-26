import React from "react";
import "./app.css";
import Header from "../components/header/header";
import Body from "../components/body/body";

export default function App(){
    return(
        <div className="app">
            <div className="up">
                <div>
                    <p><span>Lorem explicabo ab mollitia!</span>  Non nostrum consequatur error!</p>
                </div>
                <div>
                    <select name="" id="">
                        <option value="kz">AO ANGOLA</option>
                        <option value="usd">USD DOLAR</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="pt">PT ANGOLA</option>
                        <option value="en">EN USA</option>
                    </select>
                </div>
            </div>
            <Header/>
            <Body/>
        </div>
    )
}

