import React, { Fragment } from 'react'
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={checkBudget(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

BudgetControl.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default BudgetControl;