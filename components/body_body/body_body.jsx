import React from "react";
import "./body_body.css";
import { NavLink } from "react-router-dom";
import Translate from "../../src/translate";

export default function Body_body(){



    return(
        <div className="body_body">
            <section className="first_sec">
                <div className="descont">
                    <div>
                        <h2> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 30% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h2>
                            <button> <Translate pt="Ver aogora" en="See now" /> </button>
                        <h2><Translate pt="MAIS DE" en="MORE THAN"/> <span> 50% </span><Translate en="DISCOUNT ON DELIVERY" pt="DE DESCONTO NA ENTREGA" /></h2>
                    </div>
                </div>
                <div className="descont2">
                        <div className="div_1_descont2">
                        <h4> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 15% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h4>
                            <button> <Translate pt="Ver aogora" en="See now" /> </button>
                        <h4><Translate pt="MAIS DE" en="MORE THAN"/> <span> 25% </span><Translate en="DISCOUNT ON DELIVERY" pt="DE DESCONTO NA ENTREGA" /></h4>
                   
                        </div>
                        <div className="div_2_descont2">
                        <h4> <Translate pt="MAIS DE" en="MORE THAN"/>  <span> 15% </span> <Translate pt="DE DESCONTO NA COMPRA" en="DISCOUNT ON THE PURCHASE"/></h4>
                            <button> <Translate pt="Ver aogora" en="See now" /> </button>
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
                    <button><Translate pt="Ver agora" en="See now"/></button>
                </div>
            </div>
            <section className="most_buy">
                    <div><h3><Translate pt="Mais compradas" en="Most purchased"/></h3></div>
                    <div className="most_buyder">
                            <div className="img_desc">
                                <div className="img">
                                    <img src="/img/mesa.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <h3>Mesa de escritorio</h3>
                                    <h4>333.000.00.kz</h4>
                                    <div className="first_div_avoluantion">
                                        <h4>Avaliação <span>5..0</span></h4>
                                        <div className="div_avoluantion">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="numbers">
                                        <span>
                                            <p>765</p>
                                            <p>Escritorios</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Quartos</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Salas</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Outros</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="img_desc">
                                <div className="img">
                                <img src="/img/cad.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <h3>Cadeira de escritorio</h3>
                                    <h4>333.000.00.kz</h4>
                                    <div className="first_div_avoluantion">
                                        <h4>Avaliação <span>5..0</span></h4>
                                        <div className="div_avoluantion">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="numbers">
                                        <span>
                                            <p>765</p>
                                            <p>Escritorios</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Quartos</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Salas</p>
                                        </span>
                                        <span>
                                            <p>765</p>
                                            <p>Outros</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="offer_2">
                            <div>
                                <span>33% <br /> OFF</span>
                            </div>
                            <div>
                                <h3><Translate pt="Os melhores desktops gamers para ti!" en="The best gaming desktops for you!"/></h3>
                                <h5><Translate pt="Os melhores laptops para os designers" en="The best laptops for designers"/></h5>
                                <button><Translate pt="Ver agora" en="See now" /></button>
                            </div>
                    </div>
            </section>
            <section className="itens_to_salls">
                <div>
                    <div className="itens_exercicios"><h3><Translate pt="Mais compradas" en="Most purchased"/></h3></div>
                    <ol>
                        <li><NavLink> <Translate pt="Pesos" en="Weights"/></NavLink></li>
                        <li><NavLink> <Translate pt="Corridas" en="Running"/></NavLink></li>
                        <li><NavLink> <Translate pt="Natação" en="Swimming"/></NavLink></li>
                        <li><NavLink> <Translate pt="Ciclismo" en="Cycling"/></NavLink></li>
                        <li><NavLink> <Translate pt="Futebol" en="Soccer"/></NavLink></li>
                    </ol>
                </div>
                <div className="list_itens">
                        <ol>
                            <li>
                                <div className="img_product">
                                    <img src="/img/peso1.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                            <li>
                                <div className="img_product">
                                    <img src="/img/comp2.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                            <li>
                                <div className="img_product">
                                    <img src="/img/sof1.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                            <li>
                                <div className="img_product">
                                    <img src="/img/fe1.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                            <li>
                                <div className="img_product">
                                    <img src="/img/li2.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                            <li>
                                <div className="img_product">
                                    <img src="/img/l4.jpg" alt="" />
                                </div>
                                <h4><span>234.000</span>.00kz</h4>
                                <p>lobas doddkdd</p>
                                <small>5 5 5 5 5 5</small>
                            </li>
                        </ol>
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
                        <input type="number" placeholder="Seu whatzap : " />
                        <button><Translate pt="Send" en="Enviar"/></button>
                    </span>
                    <small><Translate pt="Entrar em contacto" en="Get in touch"/> <NavLink>Quinguri</NavLink></small>
                </div>
            </section>
            <section className="your_servecis">
                <span>
                   <Translate pt={"MAIS SERVIÇOS"} en={"MORE SERVICES"}/>
                </span>
                    <div>
                        <img src="/img/car1.png" alt="" />
                        <h4>Entregas gratuitas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
                    <div>
                        <img src="/img/web.jpg" alt="" />
                        <h4>Construção de Web Sites</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
                    <div>
                        <img src="/img/cons.jpg" alt="" />
                        <h4>Comsultórias</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
                    <div>
                        <img src="/img/mart.jpg" alt="" />
                        <h4>Markinting Digital</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
                    <div>
                        <img src="/img/web1.jpg" alt="" />
                        <h4>Formação de Dev.Web</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
                    <div>
                        <img src="/img/for.jpg" alt="" />
                        <h4>Formação de Markiting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur!</p>
                    </div>
            </section>
        </div>
    )
}
