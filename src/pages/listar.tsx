import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import Table from 'react-bootstrap/Table';
import { Persona1 } from '@/Interfaces/IPersona';
import { obtenerPersonas, eliminarPersona } from '@/Firebase/promesas'; 
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal } from 'react-bootstrap'; 

const listar = () => {
  const [personas, setPersonas] = useState<Persona1[]>([]);
  const [show, setShow] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona1 | null>(null);

  useEffect(() => {
    obtenerPersonas().then((personas) => {
      setPersonas(personas);
    }).catch((e) => {
      console.log(e);
      alert("Algo ocurrió");
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (persona: Persona1) => {
    setSelectedPersona(persona);
    setShow(true);
  };

  const handleEliminar = async () => {
    if (selectedPersona) {
      try {
        await eliminarPersona(selectedPersona);
        setPersonas(personas.filter(p => p.key !== selectedPersona.key));
        handleClose();
      } catch (error) {
        console.error("Error al eliminar persona:", error);
        alert("No se pudo eliminar la persona");
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} href="/admin">Admin Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/registro">Registra nuevo usuario</Nav.Link>
            <Nav.Link as={Link} href="/registro_datos">Registra Datos</Nav.Link>
            <Nav.Link as={Link} href="/listar">Listar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main style={{ flex: 1 }}>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Direccion</th>
                <th>Genero</th>
                <th>Modificar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                personas.map((p) => (
                  <tr key={p.key}>
                    <td>{p.nombre}</td> 
                    <td>{p.apellido}</td>
                    <td>{p.rut}</td>
                    <td>{p.correo}</td>
                    <td>{p.edad}</td>
                    <td>{p.direccion}</td>
                    <td>{p.genero}</td>
                    <td><Link href={{ pathname: 'modificar', query: { key: p.key } }}>
                        <Button variant='warning'>Modificar <FaEdit /></Button>
                      </Link></td>    
                    <td><Button variant='danger' onClick={() => handleShow(p)}><MdDelete />Eliminar</Button></td>         
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminación de registro de datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Está seguro de que quiere eliminar este registro?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleEliminar}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
      <footer className="bg-dark text-white mt-4 py-3" style={{ marginTop: 'auto' }}>
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
  )
}

export default listar;
