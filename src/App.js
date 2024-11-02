import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Componentes/Header";
import FormularioTareas from "./Componentes/FormularioTareas";
import Tarea from "./Componentes/Tarea";
import ListaTareas from "./Componentes/ListaTareas";

const App = () => {
  // Obtener las tareas guardadas del localstorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Acceder a localStorage y comprobamos si mostrarCompletadas es null
  let confgMostrarCompletadas = "";
  if (localStorage.getItem("setMostrarCompletadas") === null) {
    confgMostrarCompletadas = false;
  } else {
    confgMostrarCompletadas =
      localStorage.getItem("setMostrarCompletadas") === "false";
  }

  // establecer el estado de las tareas
  const [tareas, setTareas] = useState(tareasGuardadas);
  // guardando el estado
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  // El estado de mostrarComoletadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(
    confgMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem(
      "mostrarCompletadas",
      JSON.stringify(mostrarCompletadas.toString())
    );
  }, [mostrarCompletadas]);

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
