import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webscrapper from "../../Assets/Projects/webscrapper.png";

import songrecommendation from "../../Assets/Projects/songrecommendation.jpg";
import customerchurn from "../../Assets/Projects/customerchurn.jpg";

import covidai from "../../Assets/Projects/covidai.jpg";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={customerchurn}
              isBlog={false}
              title='Customer Churn Prediction'
              description='This project focuses on the customer churn prediction. I have build a dashboard in PowerBI to analyse the data. '
              ghLink='https://github.com/sukanyaghosh1234/CustomerChurnPrediction'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={covidai}
              isBlog={false}
              title='Covid-AI'
              description='This project focuses on creating an agent-based simulation model to understand the spread of COVID-19 within a population and evaluate the effectiveness of various mitigation strategies. Implemented in Python using the Mesa library, the simulation incorporates diverse parameters and scenarios to represent real-world complexities.'
              ghLink='https://github.com/sukanyaghosh1234/CovidAI'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={songrecommendation}
              isBlog={false}
              title='Song recommendation'
              description='This project involves building a song recommendation system using collaborative filtering techniques. Collaborative filtering leverages the preferences and behaviors of users to recommend items, in this case, songs, based on their similarities with other users preferences. The implementation utilizes Python, along with popular libraries such as pandas, numpy, matplotlib, and scikit-learn.
                code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage'
              ghLink='https://github.com/sukanyaghosh1234/Song-Recommendation-System-with-Collaborative-Filtering'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={webscrapper}
              isBlog={false}
              title='Web scrappy'
              description='This project involves the development of a web scraper using the Scrapy framework in Python to extract information from a given website. The website contains details about various projects, and the goal of the scraper is to gather data such as project titles, dates, descriptions, and attachments for further analysis.'
              ghLink='https://github.com/sukanyaghosh1234/Webscrappy'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
