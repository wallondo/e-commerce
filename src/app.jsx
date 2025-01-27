import React, { useContext, useEffect, useState } from "react";
import "./app.css";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import { Dados } from "./dados";

export default function App(){
    const Dads = useContext(Dados)
    const [lang,setLang] = useState(Dads.lang);

    function changLang(params){
        Dads.setLang(params)
        setLang(params)
    }
    return(
        <div className="app">
            <div className="up">
                <div>
                    {lang=="pt"? <p><span>Bem-vindo! </span> Transforme sua casa com móveis de qualidade e ofertas especiais!</p>:
                        <p> <span> Welcome! </span> Transform your home with quality furniture and special offers! </p>}
                 </div>
                <div>
                    <select name="" id="" >
                        <option value="kz">AO ANGOLA</option>
                        <option value="usd">USD DOLAR</option>
                    </select>
                </div>
                <div>
                    <select name="" id="" onChange={(evt)=>{changLang(evt.target.value)}}>
                        <option value="pt">PT ANGOLA</option>
                        <option value="en">EN USA</option>
                    </select>
                </div>
            </div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

