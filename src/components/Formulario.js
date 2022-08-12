import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Ingrese un color" className="m-3"/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Formulario;
