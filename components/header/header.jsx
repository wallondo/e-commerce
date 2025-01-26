import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <div className="first_div">
                <div className="first_div_icon">
                    <span>
                        <img src="/img/sacola.png" alt="" />
                        <small>Seu mercado online</small>
                    </span>
                </div>
                <div className="promotions">
                    <ol>
                        <li style={{color:"rgb(245, 116, 116)",fontSize:"12px"}}>OUTRAS PROMOÇÕES : </li>
                        <li>
                            <NavLink>Pesos</NavLink>
                        </li>
                        <li>
                            <NavLink>Almofadas</NavLink>
                        </li>
                        <li>
                            <NavLink>Secretárias</NavLink>
                        </li>
                        <li>
                            <NavLink>Lensois</NavLink>
                        </li>
                        <li>
                            <NavLink>Banheiros</NavLink>
                        </li>
                    </ol>
                </div>
                <div className="login">
                    <span>
                        <NavLink>Login ou registar</NavLink>
                    </span>
                    <span>
                        Contacto(+244) 941137038
                    </span>
                </div>
            </div>
            <div className="secund_div">
                <div>
                    <select name="" id="" className="categoris">
                        <option value="null">Todas categorias</option>
                        <option value="casa">Casa/copartimentos</option>
                        <option value="escritorio">Escritório/salas</option>
                        <option value="ginasio">Ginásio/parques</option>
                    </select>
                </div>
                <div className="searc_secund_div">
                    <select name="" id="">
                        <option value="null">Todas categorias</option>
                        <option value="casa">Casa/copartimentos</option>
                        <option value="escritorio">Escritório/salas</option>
                        <option value="ginasio">Ginásio/parques</option>
                    </select>
                    <input type="text" placeholder="Pesquisar Produto : " />
                    <div className="search_icon">
                        <img src="/img/lupa.png" alt="" />
                    </div>
                </div>
                <div className="others_secund_div">
                        <span className="up_span">
                            <img src="/img/up.png" alt="" />
                        </span>
                        <span className="hurt">
                            <img src="/img/love0.png" alt="" />
                            <small className="count">0</small>
                        </span>
                        <span >
                            <span className="sacola">
                                <img src="/img/sacola.png" alt="" />
                                <small className="count">0</small>
                            </span>
                            
                            <small>seu carrinho : <span style={{color:"red"}}> 39.00.kz</span></small>
                        </span>
                </div>
            </div>
        </div>
    )
}

