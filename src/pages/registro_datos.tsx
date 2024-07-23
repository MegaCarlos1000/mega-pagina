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
import { RiRegisteredFill } from "react-icons/ri";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { useRouter } from 'next/router';
import { registrarPersona1 } from '@/Firebase/promesas';   
import { Persona1 } from '@/Interfaces/IPersona';

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

const Registro = () => {
  const [errorCorreo, setErrorCorreo] = useState("");
  const [nombre, setNombre] = useState(initialState.nombre);
  const [apellido, setApellido] = useState(initialState.apellido);
  const [rut, setRut] = useState(initialState.rut);
  const [correo, setCorreo] = useState(initialState.correo);
  const [edad, setEdad] = useState(initialState.edad);
  const [direccion, setDireccion] = useState(initialState.direccion);
  const [genero, setGenero] = useState(initialState.genero);
  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorRut, setErrorRut] = useState("");
  const [errorEdad, setErrorEdad] = useState("");
  const [errorDireccion, setErrorDireccion] = useState("");
  const [errorGenero, setErrorGenero] = useState("");
  const router = useRouter();

  const validarNombre = (valor: string) => {
    if (valor.length > 0) {
      setErrorNombre("");
    } else {
      setErrorNombre("El nombre no puede estar vacío");
    }
    setNombre(valor);
  };

  const validarApellido = (valor: string) => {
    if (valor.length > 0) {
      setErrorApellido("");
    } else {
      setErrorApellido("El apellido no puede estar vacío");
    }
    setApellido(valor);
  };

  const validarRut = (valor: string) => {
    if (valor.length > 0) {
      setErrorRut("");
    } else {
      setErrorRut("El RUT no puede estar vacío");
    }
    setRut(valor);
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

  const validarEdad = (valor: string) => {
    const edad = parseInt(valor);
    if (isNaN(edad) || edad <= 0) {
      setErrorEdad("La edad debe ser un número positivo");
    } else {
      setErrorEdad("");
    }
    setEdad(edad);
  };

  const validarDireccion = (valor: string) => {
    if (valor.length > 0) {
      setErrorDireccion("");
    } else {
      setErrorDireccion("La dirección no puede estar vacía");
    }
    setDireccion(valor);
  };

  const validarGenero = (valor: string) => {
    if (valor.length > 0) {
      setErrorGenero("");
    } else {
      setErrorGenero("El género no puede estar vacío");
    }
    setGenero(valor);
  };

  const handleRegistrar = async () => {

    if (
      errorNombre ||
      errorApellido ||
      errorCorreo ||
      errorRut ||
      errorEdad ||
      errorDireccion ||
      errorGenero ||
      !nombre ||
      !apellido ||
      !correo ||
      !rut ||
      edad <= 0 ||
      !direccion ||
      !genero
    ) {
      alert("Por favor, corrija los errores antes de registrar.");
      return;
    }


    const persona: Persona1 = {
      nombre,
      apellido,
      rut,
      correo: correo.toLowerCase(),
      edad,
      direccion,
      genero,
      checkbox: initialState.checkbox
    };

    try {

      await registrarPersona1(persona);

      alert(`¡Registro exitoso! ${nombre} ${apellido}`);
      router.push('/admin');
    } catch (e) {
      console.error(e);
      alert("El correo electrónico ya está registrado en la colección personas1.");
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} href="/admin">Admin Menu</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link as={Link} href="/registro">Registra nuevo usuario</Nav.Link>
              <Nav.Link as={Link} href="/registro_datos">Registra Datos</Nav.Link>
              <Nav.Link as={Link} href="/listar">Listar </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
            <div className="text-center mb-4">
              <h2>Registro Datos de contacto</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese un nombre'
                  onChange={(e) => validarNombre(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorNombre}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicApellido">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese un apellido'
                  onChange={(e) => validarApellido(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorApellido}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRut">
                <Form.Label>RUT:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese RUT'
                  onChange={(e) => validarRut(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorRut}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCorreo">
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Ingrese Correo'
                  onChange={(e) => validarCorreo(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorCorreo}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEdad">
                <Form.Label>Edad:</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Ingrese Edad'
                  onChange={(e) => validarEdad(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorEdad}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese Dirección'
                  onChange={(e) => validarDireccion(e.currentTarget.value)}
                />
                <p style={{ color: 'red' }}>{errorDireccion}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGenero">
                <Form.Label>Género:</Form.Label>
                <Form.Select
                  value={genero}
                  onChange={(e) => validarGenero(e.currentTarget.value)}
                >
                  <option value="">Seleccione un género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </Form.Select>
                <p style={{ color: 'red' }}>{errorGenero}</p>
              </Form.Group>
              <Button
                variant='primary'
                type='button'
                className="w-100"
                onClick={handleRegistrar}
              >
                Registrar <RiRegisteredFill />
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

export default Registro;
