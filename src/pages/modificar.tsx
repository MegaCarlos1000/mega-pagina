import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { Persona1 } from '@/Interfaces/IPersona';
import { useRouter } from 'next/router';
import { actualizarPersona, obtenerPersona } from '@/Firebase/promesas';

const initialState: Persona1 = {
    nombre: "",
    apellido: "",
    rut: "",
    correo: "",
    edad: 0,
    direccion: "",
    genero: "",
    checkbox: true
};

const Modificar = () => {
    const router = useRouter();
    const [persona, setPersona] = useState<Persona1>(initialState);
      
    const handlePersona = (name: string, value: string) => {
        setPersona({ ...persona, [name]: value });
    };
  
    useEffect(() => {
        const key = router.query.key;
        if (key != undefined && typeof(key) === "string") {
            obtenerPersona(key).then((p) => {
                if (p != undefined) {
                    setPersona(p);
                } else {
                    router.push('/listar');
                }
            });
        } else {
            router.push('/listar'); 
        }
    }, [router.query.key]);
  
    const modificar = () => {
        actualizarPersona(persona)
            .then(() => {
                alert("Se actualizó con éxito");
                router.push('/listar'); 
            })
            .catch((error) => {
                console.error("Error al actualizar persona:", error);
                alert("Ocurrió un error al actualizar la persona.");
            });
    };

    return (
        <>
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
            <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese su nombre: '
                            value={persona.nombre}
                            name="nombre"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese su apellido: '
                            value={persona.apellido}
                            name="apellido"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rut:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese su rut: '
                            value={persona.rut}
                            name="rut"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Ingrese su correo: '
                            value={persona.correo}
                            name="correo"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Ingrese su edad: '
                            value={persona.edad}
                            name="edad"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese su dirección: '
                            value={persona.direccion}
                            name="direccion"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Género:</Form.Label>
                        <Form.Control
                            as="select"
                            value={persona.genero}
                            name="genero"
                            onChange={(e) => handlePersona(e.currentTarget.name, e.currentTarget.value)}
                        >
                            <option value="">Seleccione su género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <br />
                    <Button type="button" variant='success' onClick={modificar}>Modificar</Button>
                </Form>
            </Col>
            <footer className="bg-dark text-white mt-4 py-3">
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
        </>
    );
};

export default Modificar;
