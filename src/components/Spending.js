import React from 'react'
import PropTypes from 'prop-types';

const Spending = ({gasto, eliminarGasto}) => {
    return ( 
        <li className="gastos">
            <p>
                <button
                    className="button remove"
                    onClick={ () => eliminarGasto(gasto.id, gasto.cantidad)  }
                >&times;</button>

                {gasto.nombre}

                <span className="gasto">$ {gasto.cantidad}</span>

            </p>
            
        </li>  
     );
}
 
Spending.propTypes = {
    gastos: PropTypes.object.isRequired,
    eliminarGasto: PropTypes.func.isRequired

}

export default Spending;