import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div className='container text-center'>
      <h1 className='display-3 text-info m-5'>Paleta de colores</h1>
      <Formulario></Formulario>
    </div>
  );
};

export default App;