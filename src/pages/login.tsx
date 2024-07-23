import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Persona } from '@/Interfaces/IPersona';
import { useRouter } from 'next/router';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";
import { login } from '@/Firebase/promesas';

const initialState: Persona = {
  nombre: "",
  apellido: "",
  correo: "",
  contraseña: ""
};

export const Login = () => {
  const [correo, setCorreo] = useState(initialState.correo);
  const [contraseña, setContraseña] = useState(initialState.contraseña);
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const router = useRouter();

  const validarContraseña = (valor: string) => {
    const trimmedValor = valor.trim(); 
    if (trimmedValor === "") {
        setErrorContraseña("La contraseña no puede estar vacía.");
    } else {
        setContraseña(trimmedValor);
        setErrorContraseña(""); 
    }
  };

  const validarCorreo = (valor: string) => {
    const valorLower = valor.toLowerCase().trim(); 
    if (valorLower === "") {
        setErrorCorreo("El correo no puede estar vacío.");
    } else {
        setCorreo(valorLower);
        setErrorCorreo(""); 
    }
  };

  const handleLogin = async () => {
    setErrorLogin(""); 
    if (correo === "admin" && contraseña === "admin") {
      router.push('/admin');
      return;
    }
    
    try {
        await login(correo, contraseña);
        router.push('/');
    } catch (error) {
        if (error instanceof Error) {
            setErrorLogin(error.message);
        }
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} href="/">Megacarlos.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/login">Iniciar Sesion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
            <div className="text-center mb-4">
              <h2>Iniciar Sesión</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type='email' placeholder='Ingrese Correo' onChange={(e) => validarCorreo(e.currentTarget.value)} />
                <p style={{ color: 'red' }}>{errorCorreo}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type='password' placeholder='Ingrese contraseña' onChange={(e) => validarContraseña(e.currentTarget.value)} />
                <p style={{ color: 'red' }}>{errorContraseña}</p>
              </Form.Group>
              <p style={{ color: 'red' }}>{errorLogin}</p>
              <Button variant="primary" type="button" className="w-100" onClick={handleLogin}>
                Iniciar Sesión<CiLogin />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
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
}

export default Login;
