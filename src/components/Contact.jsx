import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="aboutMe">
      <div>
        <h1 className="h1">Contactame</h1>
      </div>
      <div className="contactColumn">







        <div className="marginContactLeft">
            <div className="cube">
                <div className="top"></div>
                <div>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                    <span className="four"></span>
                </div>
            </div>
        </div>
        














        <div className="marginContactRight">
            <Form style={{width: "400px", position: "relative", zIndex: "99"}}>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="First name"
                size="lg"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Last name"
                size="lg"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="email" 
                placeholder="name@example.com"
                size="lg" 
                />
            </Form.Group>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="(123) 456 7890"
                size="lg"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                as="textarea" 
                size="lg"
                rows={3} 
                placeholder="Text area" 
                />
            </Form.Group>
            </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
