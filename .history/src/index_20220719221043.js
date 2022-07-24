import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

function App(props){
  return(
    <h1>¡{props.saludo}, {props.name}!</h1>
  );
}

function withSaludo(WrappedComponent){
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props){
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
        </React.Fragment>
      );
    }
  }
}

const AppWithWhatever = withSaludo(App)("Quehubo");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<App saludo="Buenas" name="Andrea"/>  
  <AppWithWhatever name="Andrea" />    
);


