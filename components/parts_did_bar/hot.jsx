import React from "react";
import "./hot.css";
import Translate from "../../src/translate";
import { useNavigate } from "react-router-dom";


export default function Hot(){
    const nav = useNavigate()
    const ver_agora = ()=>{
        nav("/offecer")
    }

    return(
        <section className="hot">
              <h2 style={{color:"red"}}><Translate pt="Quentes" en={"Hot"}/></h2>
              <div className="hot1 hot11">
                        <h3> <Translate pt={"MAIS DE 50 CANAIS"} en={"MORE THAN 50 CHANNELS"}/></h3>
                            <button onClick={()=>{ver_agora()}}><Translate pt={"ver agora"} en={"MAIS DE 50 CANAIS"}/></button>
                        <h5> <Translate pt="NÃO PERCA ESSSA OPORTUNIDADE" en={"DON'T MISS THIS OPPORTUNITY"}/> </h5>
              </div>
              <div className="hot1 hot12">
                        <h3> <Translate pt="TODOS ESTÃO EMIGRANDO" en={"EVERYONE IS MIGRATING"}/></h3>
                            <button onClick={()=>{ver_agora()}}> <Translate pt="VER AGORA" en={"SEE NOW"}/></button>
                        <h5> <Translate pt="O NOVO MRCADO DOS VISIÓNARIOS" en={"THE NEW MARKET OF VISIONARIES"}/></h5>
              </div>
              <div className="hot1 hot13">
                        <h3><Translate pt="DIVULGE TODOS OS SEUS PRODUTOS" en="PROMOTE ALL YOUR PRODUCTS"/></h3>
                        <button onClick={()=>{ver_agora()}}> <Translate pt="VER AGORA" en={"SEE NOW"}/></button>
                        <h5> <Translate pt="ALCANSE TODOS E TUDO" en={"REACH EVERYONE AND EVERYTHING"}/></h5>
              </div>
              <div className="hot1 hot14">
                        <h3><Translate pt="TENHA A SUA PRÓPRIA EQUIPA WEB" en={"HAVE YOUR OWN WEB TEAM"}/></h3>
                        <button onClick={()=>{ver_agora()}}> <Translate pt="VER AGORA" en={"SEE NOW"}/></button>
                        <h5>
                            <Translate pt={"SEU DESENVOLVEDOR WEB"} en={"YOUR WEB DEVELOPER"}/> <br /> <Translate pt={"EQUIPE DE MARTING "} en={"MARKETING TEAM"}/><br /> 
                           <Translate pt="CONSULTÓRIA" en={"CONSULTANCY"}/> <br /> <Translate pt={" E MUITO MAIS..."} en={"AND MUCH MORE..."}/>
                        </h5>
              </div>
        </section>
    )
}