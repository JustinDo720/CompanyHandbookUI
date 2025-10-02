import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './App.css'
import { Typewriter } from 'react-simple-typewriter'

export default function Home(){
    return (<>
        <Container fluid className='ch-jumbo'>
            <Row>
                <Col md={7}>
                    <h1 style={{fontWeight: 700, fontSize: "2.75rem"}}>
                        Company Handbook is used to {" "}
                        <Typewriter
                            words={["Answer Questions", "Onboard New Hires", "Clear Confusion"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={40}
                            delaySpeed={1400}
                        />
                    </h1>
                </Col>
                <Col md={5}>
                    <p className="mt-3" style={{ opacity: 0.9 }}>
                        Upload PDFs, search, and get answers using our RAG-powered assistant.
                    </p>
                    <Button size="lg" className="mt-4 ch-primary-btn">
                        Get Started
                    </Button> 
                </Col>
            </Row>
        </Container>
    </>)
}