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
        texto: 'Lavar el Carro', 
        completada: false
      },
      {
        id: 3,
        texto: 'Lavar el Carro', 
        completada: false
      }
    ]
  ); 


  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas/>
      
    </div>
  );
}

export default App;
