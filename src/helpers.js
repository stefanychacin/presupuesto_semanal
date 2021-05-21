export const checkBudget = (presupuesto, restante) =>{
    let notice;

    if ((presupuesto / 4) > restante){
        notice = 'alert alert-danger';
    } else if ((presupuesto / 2) > restante){
        notice = 'alert alert-warning';
    } else {
        notice = 'alert alert-success';
    }
return notice;
}