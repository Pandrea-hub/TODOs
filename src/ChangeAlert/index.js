import React from "react";
import {useStorageListener} from './useStorageListener'
import '../Modal/modal.css';
import './change.css';

function ChangeAlert(){
    const {storageChange,
        setStorageChange}= useStorageListener();

    if(storageChange){
        return (
            <div className='ModalBackground'>
                <div className="modal">
                    <p>Hubo cambios</p>
                    <button onClick={ () => refresh(setStorageChange)}>Recargar</button>
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


export {ChangeAlert};