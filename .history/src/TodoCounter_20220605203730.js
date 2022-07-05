import React from 'react';



const estilos ={
    color:'red',
    backgroundColor:'yellow',
};



function TodoCounter(){
    return (
        <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter };