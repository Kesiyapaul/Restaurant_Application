import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Restaurentcard({ item }) {
  return (
    //string interpolation
    <Link to = {`/details/${item.id}`}>
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title> {item.name}</Card.Title>
        <Card.Text>
            {item.neighborhood}
                  </Card.Text>
                 <p> {item.cuisine_type}</p>
                  <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
    </Link>
  )
}

export default Restaurentcard
