import React from "react";
import "./body_body.css";
import { NavLink } from "react-router-dom";

export default function Body_body(){
    return(
        <div className="body_body">
            <section className="first_sec">
                <div className="descont">
                    <div>ola</div>
                </div>
                <div className="descont2">
                        <div></div>
                        <div></div>
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
                                <div className="img"></div>
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
                                <div className="img"></div>
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

                </div>
            </section>
            
        </div>
    )
}
