import React from "react";

const ListaTareas = ({tareas}) => {
    return ( 
        <ul className="lista-tareas">
            

            { tareas.lenth > 0 ? tareas.map((tarea) => {
                return <li key={tarea.id} className="lista-tareas__tarea" >{tarea.texto}</li>
            }):
             <div className="lista-tareas__mensaje">
                    No hay tareas para mostrar
            </div>
        }
        </ul>
     );
} 
 
export default ListaTareas;