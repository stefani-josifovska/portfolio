import classes from "./About.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DownloadCV from "./aboutComponents/DownloadCV";

const About = ({ innerRef, scrollToHome, scrollToProj }) => {
  return (
    <section
      className={classes.container}
      id="about"
      ref={innerRef}
      // onScroll={onScrollHandler}
    >
      <Container className={classes.content}>
        <Row className="d-flex align-items-center">
          <Col>
            <div className={`${classes["my-img"]} mt-4`}></div>
          </Col>
          <Col>
            <h2>About me</h2>
            <Row className="d-flex align-items-center">
              <Col className="d-flex align-items-center mt-2">
                <DownloadCV />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex align-items-center mb-5">
          <Col md={4}>
            <Container>
              <Row>
                <Col style={{ fontSize: "1.1em" }}>
                  Originally an automotive engineer, who graduated at the top of
                  the class, I decided to quit the mechanical part and become a
                  full-time coder. So today, I am a junior front-end developer,
                  looking for opportunities to learn and grow in a collaborative
                  team environment. <br />
                  <br />
                  As a volunteer for over 6 years, I've developed a team-player
                  spirit, especially in international teams, as well as some
                  corporate, communication and time-management skills, which the
                  formal education wouldn't have provided me with.
                  <br />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={8}>
            <Container>
              <Row>
                <Col>
                  <h3 className="text-center mb-4">Skills</h3>
                  <Container>
                    <Row>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>
                            <b>To code your website:</b>
                          </h4>
                          <p>HTML, JavaScript, TypeScript, React, Vue</p>
                        </div>
                      </Col>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>
                            <b>To make your website look pretty:</b>
                          </h4>
                          <p>CSS, SASS, Bootstrap, Tailwind, Bulma</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>
                            <b>To understand the brain of your website:</b>
                          </h4>
                          <p>Python, SQL, NoSQL (MongoDB, Cassandra)</p>
                        </div>
                      </Col>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>
                            <b>To have a common language with the designers:</b>
                          </h4>
                          <p>Figma, Canva, Adobe Illustator (basics)</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>To make your page seen:</h4>
                          <p>Experience with SEO and GDPR implementation</p>
                        </div>
                      </Col>
                      <Col>
                        <div className={classes["skills-wrap"]}>
                          <h4>To have a common language with anyone:</h4>
                          <p>
                            Macedonian, English, German, Slovene, Spanish,
                            Serbian, Russian
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <DownloadCV />
                </Col>
              </Row> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
