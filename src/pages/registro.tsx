import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { registrarPersona } from '@/Firebase/promesas';     
import { RiRegisteredFill } from "react-icons/ri";
import { Persona } from '@/Interfaces/IPersona';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";

const initialState: Persona = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: ""
};

export const Registro = () => {
    const [nombre, setNombre] = useState(initialState.nombre);
    const [apellido, setApellido] = useState(initialState.apellido);
    const [errorApellido, setErrorApellido] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [correo, setCorreo] = useState(initialState.correo);
    const [contraseña, setContraseña] = useState(initialState.contraseña);
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorContraseña, setErrorContraseña] = useState("");

    const router = useRouter(); 

    const validarnombre = (valor: string) => {
        if (valor.length > 0) {
            setErrorNombre("");
        } else {
            setErrorNombre("Los campos no pueden estar vacíos");
        }
        setNombre(valor);
    };

    const validarApellido = (valor: string) => {
        if (valor.length > 0) {
            setErrorApellido("");
        } else {
            setErrorApellido("Los campos no pueden estar vacíos");
        }
        setApellido(valor);
    };

    const validarCorreo = (valor: string) => {
        const valorLower = valor.toLowerCase();
        if (valorLower.trim() === "") {
            setErrorCorreo("El correo no puede estar vacío.");
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(valorLower)) {
                setErrorCorreo("Formato de correo inválido");
            } else {
                setErrorCorreo("");
            }
        }
        setCorreo(valorLower);
    };

    const validarContraseña = (valor: string) => {
        if (valor.trim() === "") {
            setErrorContraseña("La contraseña no puede estar vacía.");
        } else {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regex.test(valor)) {
                setErrorContraseña("Formato de contraseña incorrecto. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
            } else {
                setErrorContraseña("");
            }
        }
        setContraseña(valor);
    };

    const handleRegistrar = () => {
        if (errorNombre || errorApellido || errorCorreo || errorContraseña) {
            alert("Por favor, corrija los errores antes de registrar.");
            return;
        }


        const persona: Persona = {
            nombre,
            apellido,
            correo, 
            contraseña
        };

        registrarPersona(persona)
            .then(() => {

                alert("¡Registro exitoso! " + nombre + " " + apellido);
                router.push('/login');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message || "Algo ocurrió. Por favor, intente nuevamente.");
            });
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
                <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese un nombre' onChange={(e) => validarnombre(e.currentTarget.value)} />
                            <p style={{ color: 'red' }}>{errorNombre}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicApellido">
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese un apellido' onChange={(e) => validarApellido(e.currentTarget.value)} />
                            <p style={{ color: 'red' }}>{errorApellido}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCorreo">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type='email' placeholder='Ingrese Correo' onChange={(e) => validarCorreo(e.currentTarget.value)} />
                            <p style={{ color: 'red' }}>{errorCorreo}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicContraseña">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type='password' placeholder='Ingrese contraseña' onChange={(e) => validarContraseña(e.currentTarget.value)} />
                            <p style={{ color: 'red' }}>{errorContraseña}</p>
                        </Form.Group>
                        <Button variant='primary' type='button' onClick={handleRegistrar}>Registrar <RiRegisteredFill /></Button>
                    </Form>
                </Col>
            </main>
            <footer className="bg-dark text-white mt-4 py-3" style={{ marginTop: 'auto' }}>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>©2024 Megacarlos.com</p>
                            <div>
                                <GiHeartBeats /><a href="https://ch.tetr.io/u/megacarlos1000" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                    Tetris
                                </a>
                                <a href="https://www.twitch.tv/megacarlo1000" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaTwitch />
                                    Twitch
                                </a>  
                                <PiInstagramLogoBold /><a href="https://www.instagram.com/megacarlos9/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    Instagram
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};
export default Registro;
