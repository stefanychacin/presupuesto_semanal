import React, { useState, useEffect } from 'react'
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario'; 
import Listing from './components/Listing'; 
import BudgetControl from './components/BudgetControl'; 


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);


  //UseEffect que actualiza el restante
  useEffect(() => {

    if(creargasto){

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
    ])
      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetea al false
      guardarCrearGasto(false);
  }   
  }, [gasto, creargasto, gastos, restante, presupuesto]);

  const eliminarGasto = (id, cantidad) => {
    const nuevosGastos = gastos.filter(gasto => gasto.id !== id);
    const presupuestoNuevo = restante + cantidad ;
    guardarGastos(nuevosGastos);
    guardarRestante(presupuestoNuevo);
  }
 
  //Carga condicional de un componente!!!
  return (
<div className="container">
  <header>
    <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">
        
        { mostrarpregunta ? (
            < Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
            />
        ) : (
          <div className="row">
              <div className="one-half column">

              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
              </div>

              <div className="one-half column">
              <Listing 
                gastos={gastos}
                eliminarGasto={eliminarGasto}
              />

              <BudgetControl 
                presupuesto={presupuesto}
                restante={restante}
              />
              </div>
          </div>
          )
        }
      </div>
  </header>
</div>
  );
}

export default App;
