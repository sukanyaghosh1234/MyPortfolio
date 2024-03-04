import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className='purple'>Sukanya Ghosh </span>
            from <span className='purple'> Kolkata, India.</span>
            <br />
            I am currently employed as a working student Data Engineer at BASF.
            <br />
            I am pursuing Master's in Web and Data Science at University of
            Koblenz,Germany
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Content Creation (Instagram & Youtube)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Talk Data to me!" </p>
          <footer className='blockquote-footer'>Sukanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
