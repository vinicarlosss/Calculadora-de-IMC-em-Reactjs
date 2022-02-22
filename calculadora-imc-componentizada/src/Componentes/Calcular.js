import React from "react";

export default function Calcular(props){
    return(
        <div>
            <button onClick={()=>{props.calc(props.p, props.a, props.sr)}}>Calcular</button>
        </div>
    )
}