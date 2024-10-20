import React from "react";

const Tarea = ({ tarea }) => {
    // Verificamos si 'tarea' está definida y tiene la propiedad 'texto'
    if (!tarea || !tarea.texto) {
        return null; // Evitamos renderizar algo si 'tarea' no es válida
    }

    return (
        <li className="lista-tareas__tarea">
            {tarea.texto} {/* Mostramos el texto de la tarea */}
        </li>
    );
}

export default Tarea;