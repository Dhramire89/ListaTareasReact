import React, { useState } from "react";
import "./App.css";
import Header from "./Componentes/Header";
import FormularioTareas from "./Componentes/FormularioTareas";
import Tarea from "./Componentes/Tarea";
import ListaTareas from "./Componentes/ListaTareas";

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "Lavar el Carro",
      completada: false,
    },
    {
      id: 2,
      texto: "Lavar la Moto",
      completada: false,
    },
  ]);

  const [mostrarCompletadas, setMostrarCompletadas] = useState(false);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrarCompletadas={setMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas
        tareas={tareas}
        setTareas={setTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
      <Tarea />
    </div>
  );
};

export default App;
