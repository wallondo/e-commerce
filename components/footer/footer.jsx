import React, { useEffect } from "react";
import "./footer.css";
import Translate from "../../src/translate";

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
                                <h3><Translate pt={"Sobre Nós"} en={"About Us"}/></h3>
                                <p>
                                    <Translate pt={"A Nossa empres oferece móveis de qualidade e serviços digitais como criação de sites e sistemas. Também disponibilizamos mentoria e consultoria para ajudar a impulsionar seu negócio. Nosso objetivo é proporcionar excelência e inovação em produtos e serviços. Transforme seu ambiente e sua empresa conosco."}
                                     en={"Our company offers high-quality furniture and digital services such as website and system development. We also provide mentoring and consulting to help boost your business. Our goal is to deliver excellence and innovation in both products and services. Transform your environment and your business with us."}/>

                                </p>
                                <p>
                                    <Translate pt="Transforme seu ambiente e seu negócio com a Nosa Empres!  
                                        Oferecemos móveis de qualidade e soluções digitais como criação de sites e consultoria.  
                                        Conte conosco para levar seu espaço e sua empresa ao próximo nível.  
                                        Entre em contato agora e comece a transformação!" 
                                        en={"Transform your environment and your business with Our Company!  We offer high-quality furniture and digital solutions such as website creation and consulting.  Count on us to take your space and business to the next level.  Get in touch now and start the transformation!"}/>
                                </p>
                        </article>
                        <article>
                                <h3><Translate pt={"Criador"} en={"Creator"}/></h3>
                                    <h4> <Translate pt="Desenvolvedor Web" en="Web Developer"/> </h4>
                                <p>
                                    <Translate pt={"Olá! Sou um desenvolvedor web e estou disponível para criar sites personalizados para o seu negócio. Entre em contato e vamos transformar suas ideias em realidade digital! 🚀"}
                                    en={"Hello! I'm a web developer, and I'm available to create custom websites for your business. Get in touch, and let's turn your ideas into a digital reality! 🚀"}
                                    />
                                </p>
                              <address>
                                    <Translate pt={"(+224)941137038 whatzap (apenas)"} en={"(+244)941137038 WhatsApp (only)"}/>
                              </address>
                              <address>
                                <Translate pt="(+224)958657217 chamadas (apenas)" en={"(+224)958657217 Calls (only)"}/>
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

