//! SUMA 

const suma = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 + num2;

    console.log(`la suma es ${resultado}`);
}; 

//! RESTA 

const resta = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 - num2 ;

    console.log(`la resta es ${resultado}`);
}; 

//! MULTIPLICACION

const multiplicacion = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 * num2 ;

    console.log(`la multiplicacion es ${resultado}`);
}; 

//! DIVISION

const division = (arg1,arg2) => {
    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 / num2 ;

    console.log(`la division es ${resultado}`);
}; 

// OPERACIONES 

const operaciones = (parm1,parm2,operacion) => {
    switch(operacion){
        case "suma":
            suma(parm1,parm2);
            break;
        case"resta":
            resta(parm1,parm2);
            break;
        case"multiplicacion":
            multiplicacion(parm1,parm2);
            break;
        case"division":
            division(parm1,parm2);
            break;
        default:
            console.log("!SOLO ESTAN PERMITIDAS LAS OPERACIONES SUMA,RESTA,MULTIPLICACION Y DIVISION!")
    } 
    
}

operaciones(34,56,"suma");
operaciones(286,543,"resta");
operaciones(30,23,"multiplicacion");
operaciones(12,56,"division");