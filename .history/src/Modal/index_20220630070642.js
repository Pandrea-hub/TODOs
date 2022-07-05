import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

function Modal({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal'),
    );

}

export { Modal };


