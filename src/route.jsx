import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";

export default function Routas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

