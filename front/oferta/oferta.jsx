import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import "./oferta.css";
import { Link, NavLink } from "react-router-dom";
import { Dados } from "../../src/dados";
import Translate from "../../src/translate";

export default function Oferta(){
    const Dads = useContext(Dados)
    const [lang,setLang] = useState(Dads.lang);
    const [promosoes,setPromosoes] = useState([...Dads.promotion])
    const [mypromotion,setMypromotion] = useState(promosoes)
    const [mypromotion_car,setMypromotion_car] = useState([])
    const [mypromotion_car2,setMypromotion_car2] = useState(mypromotion_car)
    const [mypromotion_car2_up,setMypromotion_car2_up] = useState(mypromotion_car)
    
    const [tipo,setTipo] = useState("all")

    const menos = (params) =>{
        let car = promosoes.find(itens=>{return itens.id==params})
        let carrs = [...mypromotion_car]
        let tem = carrs.find(ele=>{return ele.id==params})
        if(tem){
            if(tem.quant<=0){
                let po = 0;
                let del = carrs.findIndex((ele)=>ele.id==params)
              
                let new_cars = mypromotion_car.splice(del,1)
                setMypromotion_car([...new_cars])
                tem.quant=0;   
            }else if(tem.quant>=0){
                tem.quant-=1
            }
            if(tem.quant<=0){
                let po = 0;
                let del = carrs.findIndex((ele)=>ele.id==params)
              
                let new_cars = mypromotion_car.splice(del,1)
                setMypromotion_car([...new_cars])
                tem.quant=1;   
            }
        }else{
            carrs.unshift(car)
            Dads.setOffertas(carrs)
        }
        let past = [...mypromotion_car]
        setMypromotion_car([...past])
        // atualizar()
    }

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
    const atualizar = ()=>{
        setMypromotion_car([...mypromotion_car])
    }
    const adicionar = (params) =>{
        let car = promosoes.find(itens=>{return itens.id==params})
        
        let carrs = [...mypromotion_car];
        let tem = carrs.find(ele=>{return ele.id==params})
        if(tem){
            console.log(tem);
            
            tem.quant+=1
            let cc = [...mypromotion_car]
            setMypromotion_car([...cc])
        }else{
            let cc = [...mypromotion_car]
            cc.unshift(car)
            setMypromotion_car([...cc])
        }
        //  atualizar()
    }
    useEffect(()=>{
        setMypromotion_car2(mypromotion_car)
    },[mypromotion_car])
  
    function tela_offer(params) {
        document.getElementById("tela_offer_id").classList.toggle("show")
    }
    function pesquisa_offer(params) {
        let text = mypromotion_car.filter((ele,pos)=>{return ele.nome.toLowerCase().includes(params.toLowerCase()) })

        setMypromotion_car2(text)
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
            <div className="header header_oferta">
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
                    <div className="secund_div secund_div_offer">
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
                        <div className="others_secund_div others_secund_div_offer">
                                <span className="up_span">
                                    <img src="/img/up.png" onClick={up} className="roda_up" alt="" style={{cursor:"pointer"}}/>
                                </span>
                                <span >
                                    <span className="sacola">
                                        <img src="/img/offer1.png" onClick={()=>{tela_offer()}} alt="" style={{cursor:"pointer"}}/>
                                        <small className="count">{mypromotion_car.length}</small>
                                    </span>
                                <small className="smal"> <Translate pt="Suas ofertas com desconto : " en="Your discounted offers. : "/> <span style={{color:"red"}}> -3039.80.00.kz</span> <br /> <Translate pt="por cada oferta" en={"Per offer."} /></small>
                                </span>   
                        </div>
                    </div>
            </div>
            <section className="corpo_buy">
                   <section className="carrinho_tela show" id="tela_offer_id">
                                        <div className="top_car">
                                            <div className="icon_car">
                                                <div>
                                                    <Link to={"/"}>
                                                        <img src="/img/sacola.png" alt="" />
                                                    </Link>
                                                    <small>Seu mercado online</small>
                                                </div>
                                                    <h3>Seu carrinho de compras</h3>
                                                <div>
                                                    <img src="/img/car.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="serch_car">
                                                <input type="text" onChange={(evt)=>{pesquisa_offer(evt.target.value)}} placeholder="Pesquisar as Ofertas : " />
                                                <div className="search_icon">
                                                    <img src="/img/lupa.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <ol className="list_cars">
                                                {
                                                    (mypromotion_car2.length<1?(<h2 className="vazio">Sem Ofertas Aproveitadas</h2>):
                                                    mypromotion_car2.map((pro,pos)=>(
                                                        <li key={pos}>
                                                            <div className="img_product">
                                                            <img src={pro.img} alt="" />
                                                            </div>
                                                            <h4>Preço : <span>{pro.preco}</span>.00kz</h4>
                                                            <h4>Total : <span>{pro.preco*pro.quant}</span>.00kz</h4>
                                                            <p>{pro.nome}</p>
                                                            <small>Avaliação : {pro.avaliacao}</small>
                                                            <p>Quantidade : {pro.quant}</p>
                                                            <div className="bt_car">
                                                                <button className="add" onClick={()=>{adicionar(pro.id)}}><Translate pt="mais" en="more" /></button>
                                                                <button className="add" onClick={()=>{menos(pro.id)}}><Translate pt="menos" en="less" /></button>
                                                            </div>
                                                        </li>
                                                    ))
                                                )
                                                }
                                        </ol>
                    </section>
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
                                        <button onClick={()=>{adicionar(pr.id)}}>aproveitar</button>
                                    </span>
                                    </li>
                                    :tipo==pr.esp?
                                    <li key={pos} style={{backgroundImage:`url(${pr.img})`}}>
                                    <h3>{pr.nome}</h3>
                                        <p>{pr.preco}.00kz</p>
                                    <h3>-{pr.desconto}%</h3>
                                    <small>Entrega : -{pr.entrega}% </small>
                                    <span>
                                        <button onClick={()=>{adicionar(pro.id)}}>aproveitar</button>
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