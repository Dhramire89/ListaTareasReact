import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const FormularioTareas = ({tareas, setTareas}) => {
    
    const [inputTarea, setInputTarea] = useState('');
   
    const handleInput = (e) =>{
        setInputTarea(e.target.value); 
    }

    const handleSummit = (e)=>{
        e.preventDefault(); 
        setTareas([
            ...tareas,
            {
                id: tareas.length + 1,
                texto: inputTarea, 
                completada: false
            }
        ]); 
    }

    return (  
        <form action="" className="formulario-tareas" onSubmit={handleSummit}>
            <input 
                type="text" 
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(e) => handleInput(e)}
                >
            </input>
            <button
                type="submit"
                className="formulario-tarea__btn"
                >
                    <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn" />

            </button>

        </form>
    );
}
 
export default FormularioTareas;