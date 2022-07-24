import React from "react";
import {withStorageAlert} from './withStorageListener'

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                onClick={
                    reload()
                }
                >Recargar</button>
            </div>
        );
    } else{
        return null;
    }
    
}

function reload(){
    toggleShow(false);
    location.reload();
}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export {ChangeAlertWithStorageListener};