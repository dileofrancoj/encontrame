import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Head from "./../../Components/Head";
import Title from "./../../Components/Title";

interface HomeProps {}

const Main: React.ComponentType = () => {
  return (
    <Container>
      <Title title="Encontrame" />

      <Row>
        <Col md={6}>
          <p>
            Encontrame es un proyecto open source que tiene como objetivo que
            las personas puedan ver y publicar información sobre gente
            desaparecida pudiendo filtrar por zonas, sexo , etc
          </p>
          <p>
            Lo que nos proponemos es generar un alto impacto y que el proceso de
            publicacion sea masivo y así poder obtener información de las
            personas de manera más rápida y eficiente.{" "}
          </p>
        </Col>

        <Col>
          <Image src="" alt="Descripción imagen" />
        </Col>
      </Row>
    </Container>
  );
};

const Home: React.SFC<HomeProps> = () => {
  return (
    <>
      <Head
        title={"Home"}
        description={
          "Pagina principal con la descripción del proyecto encontrame"
        }
      />
      <Main />
    </>
  );
};

export default Home;
