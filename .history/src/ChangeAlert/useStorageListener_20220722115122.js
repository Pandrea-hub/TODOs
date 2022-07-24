import React from "react";

function withStorageAlert(WrappedComponemt){
    return function WrappedComponemtWithStorageListener(props){
        const [storageChange,setStorageChange] = React.useState(false);
        window.addEventListener('storage',(change)=>{
            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios');
                setStorageChange(true);
            }

        });

        return(
            <WrappedComponemt
                show={storageChange}
                toggleShow={setStorageChange} 
            />
        );
    }
}


export {withStorageAlert};