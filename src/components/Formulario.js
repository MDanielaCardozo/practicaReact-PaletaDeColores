import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaColores from "./ListaColores";

const Formulario = () => {

  let coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];

  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);
  const [color, setColor] = useState();

  useEffect(() => {
    localStorage.setItem('listaColores', JSON.stringify(arregloColores));
  }, [arregloColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor('');
  }

  const borrarColor = (nombre) => {
    let arregloModificado = arregloColores.filter((valor) => {return valor !== nombre});
    setArregloColores(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <input type="color" className="mt-3"/>
          <Form.Control type="text" placeholder="Ingrese un color" className="m-3" onChange={(e) => setColor(e.target.value.trimStart())} value={color}/>
          <Button type="submit" variant="primary" className="my-3">Guardar</Button>
        </Form.Group>
      </Form>
      <ListaColores arregloColores = {arregloColores} borrarColor = {borrarColor}></ListaColores>
    </div>
  );
};

export default Formulario;
