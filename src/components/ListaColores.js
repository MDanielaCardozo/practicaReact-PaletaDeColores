import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = (props) => {
  return (
    <>
      {["sm"].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          {
            props.arregloColores.map((item, posicion) =><ItemColor key = {posicion} colorCargado = {item} borrarColor = {props.borrarColor}></ItemColor>)
          }
        </ListGroup>
      ))}
    </>
  );
};

export default ListaColores;
