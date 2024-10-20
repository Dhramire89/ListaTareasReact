import React from "react";
import Tarea from './Tarea';

const ListaTareas = ({ tareas, setTareas }) => {
    return ( 
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                console.log('Texto para mostrar: ' + tarea.texto);
                return <Tarea 
                            key={tarea.id}
                            tarea={tarea} // Pasamos el objeto tarea completo
                        />
                        
            }) : (
                <div className="lista-tareas__mensaje">
                    No hay tareas para mostrar
                </div>
            )}
        </ul>
    );
}

export default ListaTareas;
