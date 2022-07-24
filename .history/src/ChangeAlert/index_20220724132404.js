import React from "react";
import {useStorageListener} from './useStorageListener'
import '../Modal/modal.css';
import './change.css';

function ChangeAlert(){
    const {show,toggleShow}= useStorageListener();
    
    if(show){
        return (
            <div className='ModalBackground'>
                <div className="modal">
                    <p>Hubo cambios</p>
                    <button onClick={ () => refresh(toggleShow)}>Recargar</button>
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

const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};