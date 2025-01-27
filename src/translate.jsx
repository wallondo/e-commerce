import React, { useContext, useState } from "react";
import { Dados } from "./dados";


export default function Translate({en,pt}){
    const D = useContext(Dados)
    const [pts,setPt] = useState(pt)
    const [ens,setEn] = useState(en)

        if(D.lang=="en"){
            return(
                ens
            )
        }else if(D.lang=="pt"){
            return(
                pts
            )
        }
 
}

