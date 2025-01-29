import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import "./oferta.css";
import { Link, NavLink } from "react-router-dom";
import { Dados } from "../../src/dados";
import Translate from "../../src/translate";

export default function Oferta(){
    const Dads = useContext(Dados)
    const [lang,setLang] = useState(Dads.lang);
    const [promosoes,setPromosoes] = useState(Dads.promotion)
    const [mypromotion,setMypromotion] = useState(promosoes)
    const [tipo,setTipo] = useState("all")
    function changLang(params){
        Dads.setLang(params)
        setLang(params)
    }
    function up(params) {
        alert("Suas Ofertas Já Estão Atualizadas")
    }
    useEffect(()=>{
        let  prom = promosoes.filter((pr,pos)=>{return pr.tipo2=="promotion"})

        setMypromotion(prom)

    },[])
    const pesquisa2 = (params)=>{
        let text = promosoes.filter((ele,pos)=>{return ele.nome.toLowerCase().includes(params.toLowerCase()) })

        setMypromotion(text)
    }
    function tipo_promocao(params){
        setTipo(params)
    }
    return(
        <section className="oferta">
           <div className="up">
                        <div>
                            {lang=="pt"? <p><span>Bem-vindo! </span> Transforme sua casa com móveis de qualidade e ofertas especiais!</p>:
                                <p> <span> Welcome! </span> Transform your home with quality furniture and special offers! </p>}
                         </div>
                        <div>
                            <select name="" id="" >
                                <option value="kz">AO ANGOLA</option>
                                <option value="usd" disabled>USD DOLAR</option>
                            </select>
                        </div>
                        <div>
                            <select name="" id="" onChange={(evt)=>{changLang(evt.target.value)}}>
                                <option value="pt">PT ANGOLA</option>
                                <option value="en">EN USA</option>
                            </select>
                        </div>
            </div>
            <div className="header">
                    <div className="first_div">
                        <div className="first_div_icon first_div_icon_offer">
                            <Link to={"/"}>
                                <span>
                                    <img src="/img/sacola.png" alt="" />
                                    <small> {lang=="pt"?"Seu mercado online":"Your online marketplace"}</small>
                                </span>
                            </Link>
                        </div>
                        <div className="promotions">
                            <ol>
                                <li style={{color:"rgb(245, 116, 116)",fontSize:"12px"}}>
                                    <Translate pt="Tipos de promoções : " en="Types ofPpromotions : "/>  
                                </li>
                                <li>
                                    <Link to="/offecer" onClick={(evt)=>{tipo_promocao("canais")}}><Translate pt="Canais" en="Channels"/></Link>
                                </li>
                                <li>
                                    <Link to="/offecer" onClick={(evt)=>{tipo_promocao("e-ecommerce")}}><Translate pt="E-ecommerce" en="E-ecommerce"/></Link>
                                </li>
                                <li>
                                    <Link to="/offecer"  onClick={(evt)=>{tipo_promocao("publicidades")}}><Translate pt="Publicidades" en="Advertisements"/></Link>
                                </li>
                                <li>
                                    <Link to="/offecer" onClick={(evt)=>{tipo_promocao("equipas")}}><Translate pt="Equipes" en="Teams"/></Link>
                                </li>
                                <li>
                                    <Link to="/offecer" onClick={(evt)=>{tipo_promocao("all")}}><Translate  pt="Todas Promoções" en="All Promotions : "/></Link>
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
                            <select name="" id="" onChange={(evt)=>{tipo_promocao(evt.target.value)}}>
                                <option value="all"><Translate pt="Todas Promoções" en="All Promotions : "/></option>
                                <option value="canais"><Translate pt="Canais" en="Channels"/></option>
                                <option value="e-ecommerce"><Translate pt="Mercado Online" en="E-ecommerce"/></option>
                                <option value="publicidades"><Translate pt="Publicidades" en="Advertisements"/></option>
                                <option value="equipas"><Translate pt="Equipas" en="Teams"/></option>
                                <option value="all"><Translate pt="Produtos" en="Products"/></option>
                            </select>
                            {/* {<Translate pt="Pesquisar Produto" en="Search Product"/>} */}
                            <input type="text" placeholder="Pesquisar Ofertas : "  onChange={(evt)=>{pesquisa2(evt.target.value)}}/>
                            <div className="search_icon">
                                <img src="/img/lupa.png" alt="" />
                            </div>
                        </div>
                        <div className="others_secund_div">
                                <span className="up_span">
                                    <img src="/img/up.png" onClick={up} className="roda_up" alt="" style={{cursor:"pointer"}}/>
                                </span>
                            
                                <span >
                                    <span className="sacola">
                                        <img src="/img/sacola.png" alt="" style={{cursor:"pointer"}}/>
                                        <small className="count">{Dads.carrinho.length}</small>
                                    </span>
                                    
                                    <small> <Translate pt="Suas ofertas com desconto : " en="Your discounted offers. : "/> <span style={{color:"red"}}> -3039.80.00.kz</span> <br /> <Translate pt="por cada oferta" en={"Per offer."} /></small>
                                </span>
                        </div>
                    </div>
            </div>
            <section className="corpo_buy">
                    <ol className="promotion_itens">
                            {
                                mypromotion.map((pr,pos)=>(
                                   (tipo=="all"?
                                    <li key={pos} style={{backgroundImage:`url(${pr.img})`}}>
                                    <h3>{pr.nome}</h3>
                                        <p>{pr.preco}.00kz</p>
                                    <h3>-{pr.desconto}%</h3>
                                    <small>Entrega : -{pr.entrega}% </small>
                                    <span>
                                        <button>aproveitar</button>
                                    </span>
                                    </li>
                                    :tipo==pr.esp?
                                    <li key={pos} style={{backgroundImage:`url(${pr.img})`}}>
                                    <h3>{pr.nome}</h3>
                                        <p>{pr.preco}.00kz</p>
                                    <h3>-{pr.desconto}%</h3>
                                    <small>Entrega : -{pr.entrega}% </small>
                                    <span>
                                        <button>aproveitar</button>
                                    </span>
                                    </li>:""   
                                )
                                    
                                ))
                            }
                    </ol>
            </section>
        </section>
    )
}