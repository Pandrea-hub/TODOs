import React from "react";

function useStorageListener(){
    const [storageChange,setStorageChange] = React.useState(false);
    window.addEventListener('storage',(change)=>{
        if(change.key === 'TODOS_V1'){
            console.log('Hubo cambios');
            setStorageChange(true);
        }

    });

    
    return{
        show:{storageChange},
        toggleShow:{setStorageChange} 
    };
    
}


export {useStorageListener};