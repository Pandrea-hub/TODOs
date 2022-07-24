import React from "react";
import {withStorageAlert} from './withStorageListener'

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                onClick={
                    () => {
                        toggleShow(false);
                    }
                }
                >Recargar</button>
            </div>
        );
    } else{
        return null;
    }
    
}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export {ChangeAlertWithStorageListener};