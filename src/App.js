import React, {useState} from 'react';
import './App.css';
import Header from './Componentes/Header'
import FormularioTareas from './Componentes/FormularioTareas'
import Tareas from './Componentes/Tareas'
import ListaTareas from './Componentes/ListaTareas';

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
      <ListaTareas tareas = {tareas}/>
      <Tareas/>
    </div>
  );
}

export default App;
