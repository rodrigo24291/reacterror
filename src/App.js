import React from 'react';
import { Formulario } from './componente/formulario';
import Header from './componente/header';

function App() {
  return (
    <>

    <Header 
    titulo='Clima React App'
  />


  <div className="contenedor-form">
      <div className="container">
          <div className="row">
              <div className="col m6 s12">
<Formulario />                  
              </div>
              <div className="col m6 s12">
              </div>
          </div>
      </div>
  </div>
</>

  );
}

export default App;
