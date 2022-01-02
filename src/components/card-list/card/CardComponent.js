import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export const CardComponent = (props) => {
  return (
    <>
      <Col md={4} className="mb-3">
        <Card bg="info">
          <Card.Img
            variant="top"
            src={`https://robohash.org/${props.monster.id}?set=set2`}
          />
          <Card.Body>
            <Card.Title>{props.monster.name}</Card.Title>
            <Card.Text>{props.monster.email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
