import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, setEditandoTarea] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState(
    tarea ? tarea.texto : "llego con error la tarea"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    setEditandoTarea(false);
  };

  // Verificamos si 'tarea' está definida y tiene la propiedad 'texto'
  if (!tarea || !tarea.texto) {
    return null; // Evitamos renderizar algo si 'tarea' no es válida
  }

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            ></input>
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar{" "}
            </button>
          </form>
        ) : (
          // si no condifcional
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-tonones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => setEditandoTarea(!editandoTarea)}
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
