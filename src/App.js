import React, {useState} from 'react';
import './App.css';
import Header from './Componentes/Header'
import FormularioTareas from './Componentes/FormularioTareas'

const App =() => {



  const [tareas, setTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar el Carro', 
        completada: false
      },
      {
        id: 2,
        texto: 'Lavar la Moto', 
        completada: false
      },
      {
        id: 3,
        texto: 'Practicar React', 
        completada: false
      }
    ]
  ); 

 
  console.log(tareas);

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      
    </div>
  );
}

export default App;
