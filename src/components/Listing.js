import React from 'react'
import Spending from './Spending';
import PropTypes from 'prop-types';

const Listing = ({gastos, eliminarGasto}) => {


    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto =>(
                <Spending 
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGasto={eliminarGasto}
                />
            ))}
        </div>
     );

}

Listing.propTypes = {
    gastos: PropTypes.array.isRequired,
    eliminarGasto: PropTypes.func.isRequired
}
 
export default Listing;