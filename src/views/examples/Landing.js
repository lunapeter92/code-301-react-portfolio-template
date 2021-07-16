/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Technologies that Excite Me{" "}
                      </h1>
                      <p className="lead text-white">
                        HTML, CSS, JS, ReactJS, Vue.js, AWS, Linux 
                      </p>
                      
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Horned Beasts
                          </h6>
                          <p className="description mt-3">
                            Horned Beasts is a project I've created with React in my 301 class. 
                            It centers around importing a JSON file with multiple beast objects, iterating
                            over those objects and rendering the beasts. Users can choose a beast they want to 
                            see closer, and a modal will render to the page. Users can also filter the beasts
                            by number of horns. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JSON
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Components
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://heuristic-jones-81fb22.netlify.app"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            Bus Mall is a simple application that was created for a fictional marketing agency. 
                            This application allows users to vote on new products, and will show the results when voting
                            is complete. It comes with a chart that shows the amount of votes each product received, created with 
                            chart.js.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Chart.js
                            </Badge>
                            
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://lunapeter92.github.io/bus-mall/"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            About Me
                          </h6>
                          <p className="description mt-3">
                            About Me was the first project I created in Code 201. It was a simple
                            page that featured different facts about myself, as well as goals and a picture. 
                            There is also a quiz, created with Javascript, that tests users knowledge on me. 
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://lunapeter92.github.io/aboutme/"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>My Background</h3>
                    <p>
                    My name is Peter Luna and I am a software developer in training. I am an army veteran, and I have skills in both software development as well as IT operations, which I utilize to be successful with any technology problem that I face. I have wanted to be a software developer for a few years, and I decided that now was the perfect time to stop wasting my talents in an industry I'm not passionate about, and instead leverage them to learning new skills. I believe that my desire to constantly be growing my abilities through continuing education, as well as my industrious attitude make me a great candidate for any company. 
                    </p>
                 
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
        
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
