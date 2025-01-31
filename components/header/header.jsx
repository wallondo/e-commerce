import React, { useContext, useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Dados } from "../../src/dados";
import Translate from "../../src/translate";

export default function Header(){
    const Dads = useContext(Dados)
    const [lang,setLang] = useState(Dads.lang);
    
    function produto(params) {
      
    }
    function up(params) {
        alert("Seu Produtos E Ofertas Já Estão Atualizadas")
    }
    return(
        <div className="header">
            <div className="first_div">
                <div className="first_div_icon">
                    <Link to={"/"}>
                        <span>
                            <img src="/img/sacola.png" alt="" />
                            <small className="smal"> {lang=="pt"?"Seu mercado online":"Your online marketplace"}</small>
                        </span>
                    </Link>
                </div>
                <div className="promotions">
                    <ol>
                        <li style={{color:"rgb(245, 116, 116)",fontSize:"12px"}}>
                            <Translate pt="Outras promoções" en="Other promotions"/>  
                        </li>
                        <li>
                            <a href="buy/98234u893473894378nhjdfhgjdfghjddhg" onClick={()=>{produto("pesos")}}><Translate pt="Produtos" en="Products"/></a>
                        </li>
                      
                    </ol>
                </div>
                <div className="login">
                    <span>
                        <NavLink><Translate pt="Entrar ou Registar" en="Login or Register"/></NavLink>
                    </span>
                    <span>
                        <NavLink><Translate pt="Contacto(+244) 941137038" en="Contact (+244) 941137038"/></NavLink>
                    </span>
                </div>
            </div>
            <div className="secund_div">
                <div>
                    <div className="categoris">
                            <ol>
                                <Link to={"/"}><Translate pt="Início" en="home"/></Link>
                                <Link to={"/buy/3822nf8h98798375983"}><Translate pt={"produtos"} en={"products"}/></Link>
                                <Link to={"/offecer"}><Translate pt="ofertas" en="offer"/></Link>
                            </ol>
                    </div>
                </div>
                <div className="searc_secund_div">
                    <select name="" id="">
                        <option value="null"><Translate pt="Todas categorias"  en="All categories"/></option>
                        <option value="casa"><Translate pt="Casa/copartimentos"  en="House/Compartments"/></option>
                        <option value="escritorio"><Translate pt="Escritório/salas"  en="Office/Rooms"/></option>
                        <option value="ginasio"><Translate pt="Ginásio/parques"  en="Gym/Parks"/></option>
                        <option value="quarto"><Translate pt="Quartos/Suits"  en="Rooms/Suites"/></option>
                        <option value="cozinha"><Translate pt="Cozinhas/diversos"  en="Kitchens/Others"/></option>
                    </select>
                    {/* {<Translate pt="Pesquisar Produto" en="Search Product"/>} */}
                    <input type="text" placeholder="Pesquisar Em  Produto : " />
                    <div className="search_icon">
                        <img src="/img/lupa.png" alt="" />
                    </div>
                </div>
                <div className="others_secund_div">
                        <span className="up_span">
                            <img onClick={up} className="roda_up" src="/img/up.png" alt="" style={{cursor:"pointer"}}/>
                        </span>
                      
                        <span className="sacola_header">
                                <span className="sacola">
                            <Link to={"/buy/529ssfdssfsff85009"}>
                                    <img src="/img/sacola.png" alt="" style={{cursor:"pointer"}}/>
                            </Link>
                                    <small className="count">{Dads.carrinho.length}</small>
                                </span>
                            
                            <small className="smal"> <Translate pt="seu carrinho : " en="Your cart : "/> <span style={{color:"red"}}> -1030.9.00.kz </span></small>
                        </span>
                </div>
            </div>
        </div>
    )
}

