import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMysql,
  DiPython,
  DiGit,
  DiJava,
  DiSpark,
} from "react-icons/di";
import {
  SiDatabricks,
  SiPowerapps,
  SiPowerbi,
  SiMicrosoftazure,
  SiAzuredevops,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiSpark />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDatabricks />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPowerapps />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
