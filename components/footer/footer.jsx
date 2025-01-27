import React, { useEffect } from "react";
import "./footer.css";

export default function Footer(){
    useEffect(()=>{
        let m1 = document.getElementById("mov1")
        let m2 = document.getElementById("mov2")
            let time = setInterval(()=>{
                m1.classList.toggle("mov")
                m2.classList.toggle("mv2")
                console.log("ola")
            },5000)
            return(()=>{
                clearInterval(time)
            })
    },[])
    return(
        <footer className="footer">
              <div className="footer_div">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              
                <div className="mov_imoveis">
                        <div className="mov1 mov" id="mov1">
                            <div><img src="/img/loja1.jpg" alt="" /></div>
                            <div><img src="/img/loja2.jpg" alt="" /></div>
                            <div><img src="/img/loja3.jpg" alt="" /></div>
                            <div><img src="/img/loja4.jpg" alt="" /></div>
                            <div><img src="/img/loja5.jpg" alt="" /></div>
                            <div><img src="/img/loja6.jpg" alt="" /></div>
                            <div><img src="/img/loja7.jpg" alt="" /></div>
                        </div>
                        <div className="mov2" id="mov2">
                            <div><img src="/img/ele1.jpg" alt="" /></div>
                            <div><img src="/img/ele2.jpg" alt="" /></div>
                            <div><img src="/img/ele3.jpg" alt="" /></div>
                            <div><img src="/img/ele4.jpg" alt="" /></div>
                            <div><img src="/img/ele5.jpg" alt="" /></div>
                            <div><img src="/img/ele6.jpg" alt="" /></div>
                            <div><img src="/img/ele7.jpg" alt="" /></div>
                        </div>
                </div>
                <div className="information_place">
                        <article>
                                <h3>Sobre nós</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Blanditiis hic beatae molestias 
                                    quis tempore voluptate et recusandae itaque
                                    saepe velit rerum id quaerat nam asperiores explicabo.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Blanditiis hic beatae molestias 
                                    aperiam deleniti harum in,
                                    saepe velit rerum id quaerat nam asperiores explicabo.
                                </p>
                        </article>
                        <article>
                                <h3>Criador</h3>
                                    <h4>Desenvolvedor Web</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Blanditiis hic beatae molestias 
                                    quis tempore voluptate et recusandae itaque
                                    saepe velit rerum id quaerat nam asperiores explicabo.
                                </p>
                              <address>
                                (+224)941137038 whatzap (apenas)
                              </address>
                              <address>
                                (+224)958657217 chamadas (apenas)
                              </address>
                        </article>
                        <div className="sms_footer">
                                <img src="/img/cont.jpg" alt="" />
                        </div>
                </div>
              </div>
        </footer>
    )
}

