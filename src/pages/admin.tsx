import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { ListGroup } from 'react-bootstrap';

export const Admin = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} href="/">Cerrar Sesión</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/registro">Registra nuevo usuario</Nav.Link>
              <Nav.Link as={Link} href="/registro_datos">Registra Datos</Nav.Link>
              <Nav.Link as={Link} href="/listar">Listar</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="my-4 flex-grow-1">
          <Row>
            <Col lg={3}>
              <Card style={{ width: '100%' }}>
              <Link href="/registro" passHref>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1399472601/es/vector/s%C3%ADmbolo-de-marca-registrada-estilo-de-arte-lineal.jpg?s=612x612&w=0&k=20&c=IQ1UKKyk-PCkmAaJA2JRmvOOudaSWm9AJeP4KXcECO0=" />
                </Link>
                <Card.Body>
                  <Card.Title>Registro Nuevo usuario</Card.Title>
                  <Card.Text>
                    Registrar un nuevo usuario para perfil
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>nombre</ListGroup.Item>
                  <ListGroup.Item>apellido</ListGroup.Item>
                  <ListGroup.Item>correo</ListGroup.Item>
                  <ListGroup.Item>contraseña</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="/registro">Registrar nuevo usuario</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card style={{ width: '100%' }}>
              <Link href="/registro_datos" passHref>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/003/693/973/small/gold-golden-r-wing-wings-alphabet-letter-logo-icon-with-classy-design-for-company-and-business-vector.jpg" />
                </Link>
                <Card.Body>
                  <Card.Title>Registro datos</Card.Title>
                  <Card.Text>
                    Registrar datos personales
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>nombre</ListGroup.Item>
                  <ListGroup.Item>apellido</ListGroup.Item>
                  <ListGroup.Item>rut</ListGroup.Item>
                  <ListGroup.Item>correo</ListGroup.Item>
                  <ListGroup.Item>edad</ListGroup.Item>
                  <ListGroup.Item>direccion</ListGroup.Item>
                  <ListGroup.Item>genero</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="/registro_datos">Registrar datos</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card style={{ width: '100%' }}>
              <Link href="/modificar" passHref>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/045/767/662/small_2x/leaf-letter-m-logo-icon-template-design-free-vector.jpg" />
                </Link>
                <Card.Body> 
                  <Card.Title>Modificar</Card.Title>
                  <Card.Text>
                  modificar datos de registrar datos personales 
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>nombre</ListGroup.Item>
                  <ListGroup.Item>apellido</ListGroup.Item>
                  <ListGroup.Item>rut</ListGroup.Item>
                  <ListGroup.Item>correo</ListGroup.Item>
                  <ListGroup.Item>edad</ListGroup.Item>
                  <ListGroup.Item>direccion</ListGroup.Item>
                  <ListGroup.Item>genero</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Card.Link href="/modificar">Registrar datos</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card style={{ width: '100%' }}>
              <Link href="/listar" passHref>
                <Card.Img variant="top" src="https://st2.depositphotos.com/40223836/44161/i/450/depositphotos_441612014-stock-photo-golden-letter-three-dimensional-letter.jpg" />
                </Link>
                <Card.Body>
                  <Card.Title>Listar</Card.Title>
                  <Card.Text>
                    Listar personas con datos personales 
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>nombre</ListGroup.Item>
                  <ListGroup.Item>apellido</ListGroup.Item>
                  <ListGroup.Item>rut</ListGroup.Item>
                  <ListGroup.Item>correo</ListGroup.Item>
                  <ListGroup.Item>edad</ListGroup.Item>
                  <ListGroup.Item>direccion</ListGroup.Item>
                  <ListGroup.Item>genero</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Card.Link href="/listar">Listar</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <footer className="bg-dark text-white mt-auto py-3">
          <Container>
            <Row>
              <Col className="text-center">
                <p>©2024 Megacarlos.com</p>
                <div>
                  <GiHeartBeats /><a href="https://ch.tetr.io/u/megacarlos1000" target="_blank" rel="noopener noreferrer" className="text-white me-3">Tetris</a>
                  <a href="https://www.twitch.tv/megacarlo1000" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaTwitch />Twitch</a>  
                  <PiInstagramLogoBold /><a href="https://www.instagram.com/megacarlos9/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default Admin;