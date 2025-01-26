import React from "react";
import "./past.css";


export default function Past_Product(){
    return(
        <div className="past">
           <h4>PRODUTOS PASSADOS</h4>
           <ol>
                <li>
                    <div>
                        <img src="/img/produto.png" alt="" />
                    </div>
                    <div>
                        <h4>Secador de cabelo</h4>
                        <small>5 5 5 5 5</small>
                        <h5><span>203.000.00kz</span> Limitado</h5>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="/img/produto.png" alt="" />
                    </div>
                    <div>
                        <h4>Secador de cabelo</h4>
                        <small>5 5 5 5 5</small>
                        <h5><span>203.000.00kz</span> Limitado</h5>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="/img/produto.png" alt="" />
                    </div>
                    <div>
                        <h4>Secador de cabelo</h4>
                        <small>5 5 5 5 5</small>
                        <h5><span>203.000.00kz</span> Limitado</h5>
                    </div>
                </li>
           </ol>
        </div>
    )
}