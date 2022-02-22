import React, {useState} from "react";
import Altura from "./Componentes/Altura";
import Peso from "./Componentes/Peso";
import Tabela from "./Componentes/Tabela";
import Calcular from "./Componentes/Calcular";
import Resultado from "./Componentes/Resultado";

const fcalcular = (p,a,sr)=>{
  sr(p/(a*a))
}


function App() {
  const [altura, setAltura]=useState(0)
  const [peso, setPeso]=useState(0)
  const [resultado, setResultado]=useState(0)
  return (
    <>
      <Altura altura={altura} sa={setAltura}/>
      <Peso peso={peso} sp={setPeso}/>
      <Calcular calc={fcalcular} p={peso} a={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <Tabela/>
    </>
  );
}

export default App;
