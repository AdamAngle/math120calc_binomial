import React, { useState } from 'react';
import statCalc from './Formulas'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import Tex2SVG, { MathJaxProvider } from "react-hook-mathjax";
import { resultValues, tex_p, tex_n, tex_x1, tex_x2 } from './Interface';

import './App.css';

function is_not_number(input) {
  return (isNaN(input) && input !== '') || input === '';
}

function App() {
  const [currentData, setCurrentData] = useState({});
  const [currentError, setCurrentError] = useState('');

  const ShowError = (err) => {
    setCurrentError(err);
  }

  const Calculate = (e) => {
    if (e) e.preventDefault();

    // First, get all of the values
    let var_p = document.querySelector('#calcvar_p').value.trim();
    let var_n = document.querySelector('#calcvar_n').value.trim();
    let var_x1 = document.querySelector('#calcvar_x1').value.trim();
    let var_x2 = document.querySelector('#calcvar_x2').value.trim();

    // Input Validation //

    // Check if there are enough values (2 minimum)
    if (is_not_number(var_p) || var_p > 1 || var_p < 0) {
      ShowError(
        <>
          <Tex2SVG display="inline" latex={tex_p} /> must be a valid number between 0 and 1 inclusive.
        </>
      );
      return;
    } else {
      var_p = Number(var_p);
    }
    if (is_not_number(var_n)) {
      ShowError(
        <>
          <Tex2SVG display="inline" latex={tex_n} /> must be a valid integer.
        </>
      );
      return;
    } else {
      var_n = parseInt(var_n);
    }
    if (var_n > 300) {
      ShowError(
        <>
          <Tex2SVG display="inline" latex={tex_n} /> must be less than 300
        </>
      );
      return;
    }
    if (is_not_number(var_x1) || var_x1 > var_n || var_x1 < 0) {
      ShowError(
        <>
          <Tex2SVG display="inline" latex={tex_x1} /> must be a valid integer less than or equal to n.
        </>
      );
      return;
    } else {
      var_x1 = parseInt(var_x1);
    }
    if (is_not_number(var_x2) || var_x2 > var_n || var_x2 < 0) {
      ShowError(
        <>
          <Tex2SVG display="inline" latex={tex_x2} /> must be a valid integer less than or equal to n.
        </>
      );
      return;
    } else {
      var_x2 = parseInt(var_x2);
    }

    setCurrentError('');

    // Calculation //
    const result = statCalc(var_n, var_p, var_x1, var_x2);

    // Display Values //
    setCurrentData(result);
  }

  const Clear = (e) => {
    setCurrentData({});
    setCurrentError('');
    document.querySelector('#calcvar_p').value = "";
    document.querySelector('#calcvar_n').value = "";
    document.querySelector('#calcvar_x1').value = "";
    document.querySelector('#calcvar_x2').value = "";
  }

  return (
    <MathJaxProvider>
      <Container className="p-3">
        <div className="calc-title">
          <h3 className="header">Math-120 Binomial Distribution Calculator</h3>
        </div>
        <Form style={{ 'fontSize': '14px' }} onSubmit={Calculate}>
          <Form.Row>
            <Col md={3}>
              <Form.Group controlId="calcvar_p">
                <Form.Label>Probability of success (<Tex2SVG display="inline" latex={tex_p} />)</Form.Label>
                <Form.Control tabIndex={1} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="calcvar_n">
                <Form.Label>Total number of trials (<Tex2SVG display="inline" latex={tex_n} />)</Form.Label>
                <Form.Control tabIndex={2} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="calcvar_x1">
                <Form.Label>Lower fence (<Tex2SVG display="inline" latex={tex_x1} />)</Form.Label>
                <Form.Control tabIndex={3} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="calcvar_x2">
                <Form.Label>Upper fence (<Tex2SVG display="inline" latex={tex_x2} />)</Form.Label>
                <Form.Control tabIndex={4} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Row>
            <Col sm={4}>
              <ButtonGroup style={{ width: '100%' }}>
                <Button variant="secondary" onClick={Clear} tabIndex={6}>Clear</Button>
                <Button variant="primary" type="submit" block tabIndex={5}><strong>Calculate</strong></Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row style={{ 'color': 'red', 'display': currentError !== '' ? 'block' : 'none' }}>
            <Col>
              <p className="mb-0 card-subtext">
                {currentError}
              </p>
            </Col>
          </Row>
        </Form>
        <Row className="justify-content-md-center" style={{ 'marginTop': '1rem' }}>
          <Col md={8} lg={6}>
            <Card>
              <Card.Header className="text-center">
                Answer
              </Card.Header>
              <ListGroup variant="flush" style={{ 'display': 'table' }}>
                {resultValues.map((res, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <div className="lg-cell">{res.displayText}</div>
                      <div className="lg-cell lg-right"><Tex2SVG display="inline" latex={res.prefix} /></div>
                      <div className="lg-cell" id="ans-minimum">{currentData[res.name]}</div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <span className="bottom-credit">Created by Adam Angle</span>
          </Col>
        </Row>
      </Container>
    </MathJaxProvider>
  );
}

export default App;
