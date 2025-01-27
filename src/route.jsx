import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import { Dados } from "./dados";


export default function Routas(){
    const [lang,setLang] = useState("pt");

    return(
        <Dados.Provider value={{lang,setLang}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Dados.Provider>
    )
}

