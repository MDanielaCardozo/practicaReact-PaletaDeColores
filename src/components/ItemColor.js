import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemColor = (props) => {
    return (
        <div>
          <ListGroup.Item>
            { props.colorCargado }
                <Button variant='danger' onClick={() => props.borrarColor(props.colorCargado)}>Borrar</Button>
          </ListGroup.Item>
          
        </div>
    );
};

export default ItemColor;