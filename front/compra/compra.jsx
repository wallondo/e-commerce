import React, { useState } from "react";
import Header from "../../components/header/header";
import "./compra.css";

export default function Compra(){
    const [lang,setLang] = useState();
    function changLang(params){
        
    }
    return(
        <section className="compra">
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
        </section>
    )
}