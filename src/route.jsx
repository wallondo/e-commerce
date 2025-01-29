import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import { Dados } from "./dados";
import Oferta from "../front/oferta/oferta";
import Compra from "../front/compra/compra";
import emobiliarios from "./stock";
import promocoes from "./stok2";
export default function Routas(){
    const [lang,setLang] = useState("pt");
    const [carrinho,setCarrinho] = useState([])
    const [love,setLove] = useState([])
    const [categorias,setCategorias] = useState([])
    const [produtos,setProdutos] = useState([])
    const [p_passados,setP_passados] = useState([])
    const [offertas,setOffertas] = useState([])
    const [mobilias,setMobilias] = useState(emobiliarios)
    const [promotion,setPromotion] = useState(promocoes)


    return(
        <Dados.Provider value={{
            lang,setLang,carrinho,setCarrinho,
            categorias,setCategorias,produtos,setProdutos,
            p_passados,setP_passados,love,setLove,
            mobilias,setMobilias,promotion,setPromotion,
            offertas,setOffertas
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>

                    </Route>
                    <Route path="/offecer" element={<Oferta/>}/>
                    <Route path="/buy/:id" element={<Compra/>}/>
                </Routes>
            </BrowserRouter>
        </Dados.Provider>
    )
}

