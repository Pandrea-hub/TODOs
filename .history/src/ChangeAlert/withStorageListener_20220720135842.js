import React from "react";

function withStorageAlert(WrappedComponemt){
    return function WrappedComponemtWithStorageListener(props){
        const [storageChange,setStorageChange] = React.useState(false);
        
        return(
            <WrappedComponemt
                show={storageChange}
                toggleShow={setStorageChange} 
            />
        );
    }
}


export {withStorageAlert};