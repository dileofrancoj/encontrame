import * as React from "react";
import Head from "./../../Components/Head";
import Title from "./../../Components/Title";
import { Container, Row, Col, Card } from "react-bootstrap";
export interface PeopleProps {}

const Main: React.ComponentType = () => {
  return (
    <>
      <Container>
        <Title title="Personas desaparecidas" />
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const People: React.SFC<PeopleProps> = () => {
  return (
    <>
      <Head
        title={"Personas desaparecidas"}
        description={"Guia de personas desaparecidas"}
      />
      <Main />
    </>
  );
};

export default People;
