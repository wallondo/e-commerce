import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import { Dados } from "./dados";
import Oferta from "../front/oferta/oferta";
import Compra from "../front/compra/compra";


export default function Routas(){
    const [lang,setLang] = useState("pt");
    const [carrinho,setCarrinho] = useState([])
    const [love,setLove] = useState([])
    const [categorias,setCategorias] = useState([])
    const [produtos,setProdutos] = useState([])
    const [p_passados,setP_passados] = useState([])


    return(
        <Dados.Provider value={{
            lang,setLang,carrinho,setCarrinho,
            categorias,setCategorias,produtos,setProdutos,
            p_passados,setP_passados,love,setLove
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>

                    </Route>
                    <Route path="/offecer" element={<Oferta/>}/>
                    <Route path="/buy" element={<Compra/>}/>
                </Routes>
            </BrowserRouter>
        </Dados.Provider>
    )
}

