import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contacto() {
  return (
    <div>
      <h1 className='text-center my-5'>Cuentanos, ¿en que podemos ayudar? </h1>
      <div className="container">
        <Form className='text-center'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Contacto