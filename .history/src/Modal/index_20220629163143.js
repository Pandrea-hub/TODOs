import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children}){
    return ReactDOM.createPortal(
        props.children,
        document.getElementById('modal')
    );

}


