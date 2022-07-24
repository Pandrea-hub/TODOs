import React from "react";
import {withStorageAlert} from './withStorageListener'
import '../Modal/modal.css';
import './change.css';

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div className='ModalBackground'>
                <div className="modal">
                    <p>Hubo cambios</p>
                    <button
                    onClick={ () => refresh(toggleShow)
                    }>Recargar</button>
                </div>
                
            </div>
        );
    } else{
        return null;
    }
    
}

const refresh = (toggleShow) =>{
    toggleShow(false);
    window.location.reload();

}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export {ChangeAlertWithStorageListener};