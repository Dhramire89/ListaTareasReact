import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Componentes/Header";
import FormularioTareas from "./Componentes/FormularioTareas";
import Tarea from "./Componentes/Tarea";
import ListaTareas from "./Componentes/ListaTareas";

const App = () => {
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  const [tareas, setTareas] = useState(tareasGuardadas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

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
