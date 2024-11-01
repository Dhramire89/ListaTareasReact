import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Tarea = ({ tarea }) => {
    // Verificamos si 'tarea' está definida y tiene la propiedad 'texto'
    if (!tarea || !tarea.texto) {
        return null; // Evitamos renderizar algo si 'tarea' no es válida
    }

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon  
            icon={faCheckSquare}
            className="lista-tareas__icono lista-tareas__icono-check"
            />
            <div className="lista-tareas__texto">
                {tarea.texto} {/* Mostramos el texto de la tarea */}
            </div>
            <div className="lista-tareas__contenedor-tonones">
            <FontAwesomeIcon  
            icon={faEdit}
            className="lista-tareas__icono lista-tareas__icono-accion"
            />
             <FontAwesomeIcon  
            icon={faTimes}
            className="lista-tareas__icono lista-tareas__icono-accion"
            />

            </div>
            
        </li>
    );
}

export default Tarea;