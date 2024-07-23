import React from 'react';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitch } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";


export default function Home() {
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
    <Container className="mt-4">
                <Row>
                    <Col>
                        <h1>¿Quién soy?</h1>
                        <p>¡Hola, mortales de INACAP! Soy MegaCarlos, el dios de la programación en estas sagradas tierras. Aunque una lesión en la pierna me ha frenado un poco, mi camino hacia la grandeza sigue firme. En las aulas y en la cancha, mi talento sigue deslumbrando. ¡Prepárense para la siguiente etapa de mi épica aventura!</p>


                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Misión De MegaCarlos</h1>   
                        <p>MegaCarlos, el ídolo de INACAP, estaba celebrando a lo grande en una fiesta masiva. En medio de la joda, se dio cuenta de que había perdido su mochila, la que Mauro había dejado botada entre la multitud mientras él estaba en plena celebración.</p>

                        <p>MegaCarlos, disfrazado de Big Smoke, se lanzó a buscar su mochila entre la gente. Pero con tanto caos y el sudor empapándole la camiseta, la mochila no apareció.</p>

                        <p>Después de un rato de desesperación, MegaCarlos se tomó un descanso y reflexionó. Se dio cuenta de que, aunque la mochila era importante, lo que realmente valía era cómo había manejado la situación. Al final, nunca recuperó la mochila, pero sí ganó una verdadera amistad con Mauro. Juntos siguieron disfrutando del evento, y MegaCarlos aprendió que a veces las pérdidas materiales pueden traer algo mucho más valioso: una buena amistad.</p>

                    </Col>

                </Row>
                <Row>
                    <Col>
                        <h2>El Mega Video</h2>
                        <p>El temazo que puse mientras buscaba al watón Mauro</p>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://www.youtube.com/embed/5sRvLHLxSEg" 
                            allowFullScreen 
                            title="Mega Video"
                        ></iframe>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="h1_cambiar">Mapa de Mi Sufrimiento</h2>
                        <p>Ahora te mostraré dónde viví todo mi sufrimiento después de ser nerfeado por la sociedad.</p>
                        <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5033.655684370069!2d-70.33728110000001!3d-27.361065699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698047547c01749%3A0xb972b1fd182ecc29!2sINACAP%20Sede%20B!5e0!3m2!1sen!2s!4v1648454801387!5m2!1sen!2s" 
                            style={{ border: 0, width: '100%', height: '500px' }} 
                            allowFullScreen 
                            loading="lazy" 
                            title="Mapa de Mi Sufrimiento"
                        ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>

            <footer className="bg-dark text-white mt-4 py-3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>©2024 Megacarlos.com</p>
                            <div>
                            <GiHeartBeats /><a href="https://ch.tetr.io/u/megacarlos1000" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                    Tetris
                                </a>
                                <a href="https://www.twitch.tv/megacarlo1000" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaTwitch />
                                    Twich
                                </a>  

                                <PiInstagramLogoBold /><a href="https://www.instagram.com/megacarlos9/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    Instagram
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
  );
}

