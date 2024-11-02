import React from "react";
import Tarea from './Tarea';

const ListaTareas = ({ tareas, setTareas }) => {
    const toggleCompletada  = (id) =>{
        setTareas(tareas.map((tarea)  => {
            if(tarea.id ===  id){
                return{
                    ...tarea, completada: !tarea.completada
                }
            }
            return tarea; 
        }) );
    }; 

    const editarTarea  = (id, nuevoTexto) =>{
        setTareas(tareas.map((tarea)  => {
            if(tarea.id ===  id){
                return{
                    ...tarea, texto: nuevoTexto
                }
            }
            return tarea; 
        }) );
    }; 

    return ( 
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                return <Tarea 
                            key={tarea.id}
                            tarea={tarea} // Pasamos el objeto tarea completo
                            toggleCompletada = {toggleCompletada}
                            editarTarea = {editarTarea}
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
