import React, { useContext, useState } from "react";
import Header from "../../components/header/header";
import "./compra.css";
import Translate from "../../src/translate";
import { Dados } from "../../src/dados";
import { Link, NavLink } from "react-router-dom";

export default function Compra(){
    const Dads = useContext(Dados)
    const [lang,setLang] = useState(Dads.lang);
    const [all_products,setAll_products] = useState(Dads.mobilias)
    const [products,setProduts] = useState(all_products)
    const [categorias_all,setCategorias_all] = useState("all") 


    function changLang(params){
        Dads.setLang(params)
        setLang(params)
    }
    function produto(params) {

    }
    function pesquisa(params){
        let text = all_products.filter((ele,pos)=>{return ele.nome.toLowerCase().includes(params.toLowerCase()) })

        setProduts(text)
    }
    function categoria_all(params){
        setCategorias_all(params)
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
             <div className="header">
                <div className="first_div">
                    <div className="first_div_icon">
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
                                <Translate pt="Outras promoções" en="Other promotions"/>  
                            </li>
                            <li>
                                <a href="#list_itens" onClick={()=>{produto("pesos")}}><Translate pt="Pesos" en="Weights"/></a>
                            </li>
                            <li>
                                <a href="#list_itens" onClick={()=>{produto("almofadas")}}><Translate pt="Almofadas" en="Cushions"/></a>
                            </li>
                            <li>
                                <a href="#list_itens" onClick={()=>{produto("secretárias")}}><Translate pt="Secretárias" en="Desks"/></a>
                            </li>
                            <li>
                                <a href="#list_itens" onClick={()=>{produto("lençóis")}}><Translate pt="Lençóis" en="Sheets"/></a>
                            </li>
                            <li>
                                <a href="#list_itens" onClick={()=>{produto("banheiros")}}><Translate pt="Banheiros" en="Bathrooms"/></a>
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
                        <select name="" id="" className="categoris">
                            <option value="null"><Translate pt="Categories" en="Categorias"/></option>
                            <option value="casa"><Translate pt="Casa" en="House"/></option>
                            <option value="escritorios"><Translate pt="Escritório" en="Office"/></option>
                            <option value="ginasio"><Translate pt="Ginásio"  en="Gym"/></option>
                        </select>
                    </div>
                    <div className="searc_secund_div">
                        <select name="" id="" onChange={(evt)=>{categoria_all(evt.target.value)}}>
                            <option value="all"><Translate pt="Todas categorias"  en="All categories"/></option>
                            <option value="casa"><Translate pt="Casa/copartimentos"  en="House/Compartments"/></option>
                            <option value="escritorio"><Translate pt="Escritório/salas"  en="Office/Rooms"/></option>
                            <option value="ginasio"><Translate pt="Ginásio/parques"  en="Gym/Parks"/></option>
                            <option value="quarto"><Translate pt="Quartos/Suits"  en="Rooms/Suites"/></option>
                            <option value="cozinha"><Translate pt="Cozinhas/diversos"  en="Kitchens/Others"/></option>
                        </select>
                        {/* {<Translate pt="Pesquisar Produto" en="Search Product"/>} */}
                        <input type="text" placeholder="Pesquisar Produto : " onChange={(evt)=>{pesquisa(evt.target.value)}} />
                        <div className="search_icon">
                            <img src="/img/lupa.png" alt="" />
                        </div>
                    </div>
                    <div className="others_secund_div">
                            <span className="up_span">
                                <img src="/img/up.png" alt="" style={{cursor:"pointer"}}/>
                            </span>
                            <span className="hurt">
                                <img src="/img/love0.png" alt="" style={{cursor:"pointer"}}/>
                                <small className="count">{Dads.love.length}</small>
                            </span>
                            <span >
                                <span className="sacola">
                                    <img src="/img/sacola.png" alt="" style={{cursor:"pointer"}}/>
                                    <small className="count">{Dads.carrinho.length}</small>
                                </span>
                                
                                <small> <Translate pt="seu carrinho : " en="Your cart : "/> <span style={{color:"red"}}> 39.00.kz</span></small>
                            </span>
                    </div>
                </div>
            </div>
            <section className="produtos">
                <ol>
                    {
                        products.map((pro,pos)=>(
                            (categorias_all!="all"?(
                                (categorias_all==pro.tipo?(
                                    <li key={pos}>
                                <div className="img_product">
                                <img src={pro.img} alt="" />
                                </div>
                                <h4><span>{pro.preco}</span>.00kz</h4>
                                <p>{pro.nome}</p>
                                <small>{pro.avaliacao}</small>
                                <button className="add" onClick={()=>{adicionar(pro.id)}}><Translate pt="adicionar" en="more" /></button>
                                </li>
                                ):"")
                            ):(
                                <li key={pos}>
                                <div className="img_product">
                                <img src={pro.img} alt="" />
                                </div>
                                <h4><span>{pro.preco}</span>.00kz</h4>
                                <p>{pro.nome}</p>
                                <small>{pro.avaliacao}</small>
                                <button className="add" onClick={()=>{adicionar(pro.id)}}><Translate pt="adicionar" en="more" /></button>
                                </li>
                            ))
                        ))
                    }
                </ol>
            </section>
        </section>
    )
}