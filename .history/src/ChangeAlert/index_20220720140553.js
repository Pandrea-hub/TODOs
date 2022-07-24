import React from "react";
import {withStorageAlert} from './withStorageListener'

function ChangeAlert(){
    return <p>Hubo cambios</p>;
}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export {ChangeAlertWithStorageListener};