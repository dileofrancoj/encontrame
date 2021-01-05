import React from "react";
import { Row, Col } from "react-bootstrap";
export interface TitleProps {
  title: string;
}

const Title: React.SFC<TitleProps> = ({ title }) => {
  return (
    <Row className="mt-4 mb-4">
      <Col md={12} sm={12}>
        <h2 className="text-center">{title}</h2>
      </Col>
    </Row>
  );
};

export default Title;
