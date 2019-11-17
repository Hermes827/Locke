import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MoonPhase() {
  return (
    <div className="moon-phase">
      <Container>
        <Row>
          <Col><img className="moonPhaseIMG" src="../photos/newMoon.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/waxingCrescent.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/firstQuarter.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/waxingGibbous.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/fullMoon.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/waningGibbous.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/lastQuarter.png"/></Col>
          <Col><img className="moonPhaseIMG" src="../photos/waningCrescent.png"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MoonPhase;
