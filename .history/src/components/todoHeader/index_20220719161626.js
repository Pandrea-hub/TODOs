import React from "react";


function TodoHeader({children}){
    return (
          <header>
            {React.cloneElement(children,{loading:true})}
          </header>
    );
}

export {TodoHeader};