import React from "react";
import {withStorageAlert} from './withStorageListener'

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                onClick={
                    refresh(toggleShow)
                }
                >Recargar</button>
            </div>
        );
    } else{
        return null;
    }
    
}

function refresh(toggleShow){
    toggleShow(false);
    window.location.reload();

}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export {ChangeAlertWithStorageListener};