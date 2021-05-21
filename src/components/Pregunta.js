import React, { Fragment, useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //State de validacion
    const [error, guardarError] = useState(false);

    //Funcion q lee el presupuesto
    const definirPresupuesto = e =>{
        guardarCantidad ( parseInt (e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
    e.preventDefault();

    //Validacion
    if (cantidad < 1 || isNaN(cantidad)){
        guardarError(true);
        return;
    }

    //Si la validacion se realiza
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
    }

    return ( 
        <Fragment>

            { error ? <Error mensaje="El Presupuesto es incorrecto" /> : null }

            <form
            onSubmit={agregarPresupuesto}
            >
                <input 
                    type='number' 
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;