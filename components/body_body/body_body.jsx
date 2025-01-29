import React, { useContext, useEffect, useRef, useState } from "react";
import "./body_body.css";
import { NavLink, useNavigate } from "react-router-dom";
import Translate from "../../src/translate";
import { Dados } from "../../src/dados";

export default function Body_body(){
    const dados = useContext(Dados);
    const nav = useNavigate()
    const [prod,setProd] = useState([...dados.mobilias])
    const [mais_c1,setMais_c1] = useState([...dados.mobilias])
    const [mais_c,setMais_c] = useState([...dados.mobilias])
    const [mais_c_tela,setMais_c_tela] = useState(mais_c.splice(0,6))
    const [tipo,setTipo] = useState("")
    const [antes,setAntes] = useState(0)
    const [depois,setDepois] = useState(6)
    const [sms_dune,setSms_dune] = useState("")
    const [sms_error,setSms_error]=useState("")
    const sms_ref = useRef(null)

    
    function sms(params){

    if(sms_ref.current.value==""){
        setSms_error("O Campo não ode estar vázio")
        setTimeout(()=>{
            setSms_error("")
        }, 1000);
        sms_ref.current.value=""
        return false
    }
    if(sms_ref.current.value.length>999999999){
        setSms_error("Ensira um número válido")
        setTimeout(()=>{
            setSms_error("")
        }, 1000);
        sms_ref.current.value=""
        return false;
    }
    if(sms_ref.current.value<900000000){
        setSms_error("Ensira um número válido")
        setTimeout(()=>{
            setSms_error("")
        }, 1000);
        sms_ref.current.value=""
        return false;
    }
    if(!sms_ref.current.value.includes(+244)){
        setSms_error("Comece com o código regional +244")
        setTimeout(()=>{
            setSms_error("")
        }, 1000);
        sms_ref.current.value=""
        return false
    }
    if(!sms_ref.current.value==""){
        sms_ref.current.value=""
        setSms_dune("Número recebido com exito")
        setTimeout(() => {
            setSms_dune("")
        }, 1000);
        return true;
    }
    }
    function produto(params) {
       setTipo(params)
       console.log(params)
    // setTipo("escritorio")
    }
    const go = (p)=>{
        if(prod.length<=depois){
            setDepois(6)
            setAntes(0)
        }else{
           console.log(prod);
            setAntes(depois)
            setDepois(nu=>nu+p)
        }
    }
    const back = (p)=>{
        if(antes<=0){
            setDepois(prod.length)
            setAntes(prod.length-6)
        }else{
        setDepois(antes)
        setAntes(nu=>nu-p)
        }
    }
    useEffect(()=>{
        let temp = [...prod]
        
        let tela = temp.slice(antes,depois)
      
        setMais_c_tela(tela)
    },[antes,depois])
    const avaliacao = (ava)=>{
        if(ava==1){ return <span style={{width:"20%"}}></span>}
        else if(ava==2){ return <span style={{width:"40%"}}></span>}
        else if(ava==3){return <span style={{width:"60%"}}></span>}
        else if(ava==4){return <span style={{width:"80%"}}></span>}
        else if(ava==5){return <span style={{width:"100%"}}></span>}
        else{return <span style={{width:"0%"}}></span>}
    }
    useEffect(()=>{
        let ppp = [...mais_c1]; 
        setMais_c1(ppp.slice(0,2))
    },[])
    function adicionar(params) {
           nav("buy/"+params)
    }
    const ver_agora = ()=>{
        nav("/offecer")
    }

    return(
        <div className="body_body">
            
            <section className="first_sec">
                <div className="descont">
                    <div>
                        <h2> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 30% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h2>
                            <button onClick={()=>{ver_agora()}}><Translate pt="Ver aogora" en="See now" /> </button>
                        <h2><Translate pt="MAIS DE" en="MORE THAN"/> <span> 50% </span><Translate en="DISCOUNT ON DELIVERY" pt="DE DESCONTO NA ENTREGA" /></h2>
                    </div>
                </div>
                <div className="descont2">
                        <div className="div_1_descont2">
                        <h4> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 15% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h4>
                            <button onClick={()=>{ver_agora()}}> <Translate pt="Ver aogora" en="See now" /> </button>
                        <h4><Translate pt="MAIS DE" en="MORE THAN"/> <span> 25% </span><Translate en="DISCOUNT ON DELIVERY" pt="DE DESCONTO NA ENTREGA" /></h4>
                   
                        </div>
                        <div className="div_2_descont2">
                        <h4> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 15% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h4>
                            <button onClick={()=>{ver_agora()}}><Translate pt="Ver aogora" en="See now" /> </button>
                        <h4><Translate pt="MAIS DE" en="MORE THAN"/> <span> 25% </span><Translate en="DISCOUNT ON DELIVERY" pt="DE DESCONTO NA ENTREGA" /></h4>
                   
                        </div>
                </div>
            </section>
            <div className="line">
                <div className="offer">
                    <img src="/img/pre1.png" alt="" />
                    <p>
                        <Translate en="SPECIAL OFFER" pt="OFERTA ESPECIAL" />
                    </p>
                </div>
                <div>
                    <p><Translate pt="Na construção de um website, você recebe o domínio gratuitamente!" en="In the construction of a website, do you get the domain for free"/></p>
                    <button onClick={()=>{ver_agora()}}><Translate pt="Ver agora" en="See now"/></button>
                </div>
            </div>
            <section className="most_buy">
                    <div><h3><Translate pt="Mais compradas" en="Most purchased"/></h3></div>
                    <div className="most_buyder">
            {
                mais_c1.map((pro,po)=>(
                    <div className="img_desc" key={po}>
                        <div className="img">
                            <img src={pro.img} alt="" />
                        </div>
                        <div className="desc">
                            <h3>{pro.nome}</h3>
                            <h4>{pro.preco}.00.kz</h4>
                            <div className="first_div_avoluantion">
                                <h4>Avaliação <span>{pro.avaliacao}</span></h4>
                                <div className="div_avoluantion">
                                   {
                                    avaliacao(pro.avaliacao)
                                   }
                                </div>
                            </div>
                            <div className="numbers">
                                <span>
                                    <p>{pro.lugares.quarto}</p>
                                    <p>Escritorios</p>
                                </span>
                                <span>
                                    <p>{pro.lugares.escritorio}</p>
                                    <p>Quartos</p>
                                </span>
                                <span>
                                    <p>{pro.lugares.sala}</p>
                                    <p>Salas</p>
                                </span>
                                <span>
                                    <p>{pro.lugares.outros}</p>
                                    <p>Outros</p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
                        
            </div>
            <div className="offer_2">
                    <div>
                        <span>33% <br /> OFF</span>
                    </div>
                    <div>
                        <h3><Translate pt="Os melhores desktops gamers para ti!" en="The best gaming desktops for you!"/></h3>
                        <h5><Translate pt="Os melhores laptops para os designers" en="The best laptops for designers"/></h5>
                        <button onClick={()=>{ver_agora()}}><Translate pt="Ver agora" en="See now" /></button>
                    </div>
            </div>
        </section>
        <section className="itens_to_salls">
            <div>
                <div className="itens_exercicios"><h3><Translate pt="Mais compradas" en="Most purchased"/></h3></div>
                <ol>
                    <li><a href="#all" onClick={()=>{produto(null)}}> <Translate pt="Todos" en="all"/></a></li>
                    <li><a href="#cozinha" onClick={()=>{produto("cozinha")}}> <Translate pt="Cozinha" en="Weights"/></a></li>
                    <li><a href="#escritorio" onClick={()=>{produto("escritorio")}}> <Translate pt="Escritorio" en="Running"/></a></li>
                    <li><a href="#sala" onClick={()=>{produto("sala")}}> <Translate pt="Sala" en="Sala"/></a></li>
                    <li><a href="#quarto" onClick={()=>{produto("quarto")}}> <Translate pt="Quarto" en="Cycling"/></a></li>
                    <li><a href="#wc" onClick={()=>{produto("wc")}}> <Translate pt="Wc" en="WC"/></a></li>
                </ol>
            </div>
            <div className="list_itens">
                    <ol id="list_itens">
                        {
                            mais_c_tela.map((pro,pos)=>(
                                (tipo?
                                    (pro.tipo==tipo?(
                                        <li key={pos}>
                                            <div className="img_product">
                                                <img src={pro.img} alt="" />
                                            </div>
                                            <h4><span>{pro.preco}</span>.00kz</h4>
                                            <p>{pro.nome}</p>
                                            <small>{pro.avaliacao}</small>
                                            <button className="add" onClick={()=>{adicionar(pro.id)}}> <Translate pt="ver agora" en="see" /></button>
                                        </li>
                                    ):"")
                                    :
                                    <li key={pos}>
                                    <div className="img_product">
                                        <img src={pro.img} alt="" />
                                    </div>
                                    <h4><span>{pro.preco}</span>.00kz</h4>
                                    <p>{pro.nome}</p>
                                    <small>{pro.avaliacao}</small>
                                    <button className="add" onClick={()=>{adicionar(pro.id)}}><Translate pt="ver agora" en="see" /></button>
                                    </li>
                                )
                            ))
                        }
                    </ol>
                    <div className="go_back">
                        <button onClick={()=>{back(6)}}><img src="/img/left.png" /></button>
                        <button onClick={()=>{go(6)}}><img src="/img/right.png" /></button>
                    </div>
            </div>
                </section>
            <section className="sms_update">
                <span>
                    <Translate pt="GARANTIR AS SMS" en="ENSURE THE SMS"/>
                </span>
                <div>
                    <h4><Translate pt="Olá caríssimo" en="Hello, dear"/></h4>
                    <h2><Translate pt="Receba as novidades de primeira" en="Receive the latest updates first"/></h2>
                    <span>
                        <input type="number" placeholder="Seu whatzap : (+244) 9...... " min={1} max={999999999} ref={sms_ref} />
                        <button onClick={()=>{sms()}}><Translate pt="Send" en="Enviar"/></button>
                    </span>
                    <p style={{color:"green",fontWeight:"bold"}}>{sms_dune?sms_dune:""}</p>
                    <p style={{color:"red",fontWeight:"bold"}}>{sms_error?sms_error:""}</p>
                    
                    <small><Translate pt="Entrar em contacto" en="Get in touch"/> <NavLink>Quinguri</NavLink></small>
                </div>
            </section>
            <section className="your_servecis">
                <span>
                   <Translate pt={"MAIS SERVIÇOS"} en={"MORE SERVICES"}/>
                </span>
                    <div>
                        <img src="/img/car1.png" alt="" />
                        <h4><Translate pt="Entregas gratuitas" en="Free delivery"/></h4>
                        <p><Translate pt="Entregamos em toda parte de Angola" en="We deliver all over Angola"/></p>
                    </div>
                    <div>
                        <img src="/img/web.jpg" alt="" />
                        <h4><Translate pt="Construção de Web Sites" en="Website Development"/></h4>
                        <p><Translate pt={"Desde pequenos porte até grande porte"} en={"From small to large scale"}/></p>
                    </div>
                    <div>
                        <img src="/img/cons.jpg" alt="" />
                        <h4><Translate pt={"Consultorias"} en={"Consultancies"}/></h4>
                        <p><Translate pt={"Faça a sua empresa crescer da melhor forma, sob orientação"} en={"Make your business grow in the best way, under guidance."}/></p>
                    </div>
                    <div>
                        <img src="/img/mart.jpg" alt="" />
                        <h4><Translate pt={"Marketing Digital"} en={"Digital Marketing"}/></h4>
                        <p><Translate pt={"Eleve o seu grau de vendas em quantidade e qualidade"} en={"Increase your sales in both quantity and quality"}/></p>
                    </div>
                    <div>
                        <img src="/img/web1.jpg" alt="" />
                        <h4><Translate pt={"Formação de Dev.Web"} en={"Web Developer Training"}/></h4>
                        <p><Translate pt={"Comece a desenvolver sites, sistemas e muito mais"} en={"Start developing websites, systems, and much more"}/></p>
                    </div>
                    <div>
                        <img src="/img/for.jpg" alt="" />
                        <h4><Translate pt={"Formação de Marketing"} en={"Marketing Training"}/></h4>
                        <p><Translate pt={"Saiba como o mercado digital funciona e comece a usar a teu favor"} en={"Learn how the digital market works and start using it to your advantage"}/></p>
                    </div>
            </section>
        </div>
    )
}
