import React from "react";
import "./body_body.css";
import { NavLink } from "react-router-dom";

export default function Body_body(){
    return(
        <div className="body_body">
            <section className="first_sec">
                <div className="descont">
                    <div>
                        <h2>MAIS DE <span> 30% </span> DE DESCONTO NA COMPRA</h2>
                            <button>ver agora</button>
                        <h2>MAIS DE <span> 50% </span> DE DESCONTO NA ENTREGA</h2>
                    </div>
                </div>
                <div className="descont2">
                        <div className="div_1_descont2">
                            <h4>MAIS DE <span> 30% </span> DE DESCONTO NA COMPRA</h4>
                                <button>ver agora</button>
                            <h4>MAIS DE <span> 50% </span> DE DESCONTO NA ENTREGA</h4>
                        </div>
                        <div className="div_2_descont2">
                            <h4>MAIS DE <span> 30% </span> DE DESCONTO NA COMPRA</h4>
                                <button>ver agora</button>
                            <h4>MAIS DE <span> 50% </span> DE DESCONTO NA ENTREGA</h4>
                        </div>
                </div>
            </section>
            <div className="line">
                <div className="offer">
                    <img src="/img/pre1.png" alt="" />
                    <p>
                    OFER especial
                    </p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>Get see now</button>
                </div>
            </div>
            <section className="most_buy">
                    <div><h3>Mais compradas</h3></div>
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
                                <h3>Lorem ipsum dolor sit amet, consectetur!</h3>
                                <h5>Lorem ipsum dolor sit amet, consectetur!</h5>
                                <button>Ver agora</button>
                            </div>
                    </div>
            </section>
            <section className="itens_to_salls">
                <div>
                    <div className="itens_exercicios"><h3>Mais compradas</h3></div>
                    <ol>
                        <li><NavLink>Pesos</NavLink></li>
                        <li><NavLink>Corridas</NavLink></li>
                        <li><NavLink>Natação</NavLink></li>
                        <li><NavLink>Cicletismo</NavLink></li>
                        <li><NavLink>Footebol</NavLink></li>
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
                    GARANTIR AS SMS
                </span>
                <div>
                    <h4>Oola carissímo</h4>
                    <h2>Receba as novidades de Primeira</h2>
                    <span>
                        <input type="number" placeholder="Seu whatzap : " />
                        <button>Enviar</button>
                    </span>
                    <small>Entrar em comtacto : <NavLink>Quinguri</NavLink></small>
                </div>
            </section>
            <section className="your_servecis">
                <span>
                    MAIS SERVIÇOS
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
