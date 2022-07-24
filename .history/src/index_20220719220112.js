import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

function App(props){
  return(
    <h1>¡{props.saludo}, {props.name}!</h1>
  );
}

function withWhatever(WrappedComponent){
  return function ComponenteDeVerdad(props){
    return(
      <React.Fragment>
        <WrappedComponent />
        <p>Estamos acompañando al WrappedComponent</p>
      </React.Fragment>
      
    );
  }
}

const AppWithWhatever = withWhatever(App);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<App saludo="Buenas" name="Andrea"/>  
  <AppWithWhatever />    
);


