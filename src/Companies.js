import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react' 
import axios from 'axios' 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import {FaSearch, FaArrowAltCircleRight} from 'react-icons/fa'
import { MdClear } from 'react-icons/md';
import { RiRobot2Fill } from 'react-icons/ri';
import "./Styles.css" 

export default function Companies() {
    const [companies, setCompanies] = useState([])
    const [searchedCompany, setSearchedCompany] = useState('')
    const [showSearchBtn, setShowSearchBtn] = useState(false)
    const [clearSearchBtn, setClearSearchBtn] = useState(false)
    const [sendChat, setSendChat] = useState(false)

    
    const startChat = () => {
        console.log('Chatting')
    }

    const handleSearchChange = (e) => {
        setSearchedCompany(e.target.value)
        if(e.target.value.length > 0){
            setShowSearchBtn(true)
        } else {
            setShowSearchBtn(false)
            setClearSearchBtn(false)
        }
    }

    const handleEnterSubmit = (e) => {
        if (e.key === 'Enter'){
            handleSearchSubmit(e)
        }
    }

    const handleSearchSubmit =  (e) => {
        // TODO: Make endpoint to search via get request and search the params ?: 
        if(searchedCompany.length > 0){
            setClearSearchBtn(true)
        }
    }

    const handleSearchClear = (e) => {
        setSearchedCompany('')
        setClearSearchBtn(!clearSearchBtn)
    }

    useEffect(()=>{ 
        axios.get('http://localhost:8000/company/all').then((rep)=>{
            if(rep.data.length > 0){
                setCompanies(rep.data)
            } else {
                setCompanies(['No companies have registered at the moment.'])
            }
        }).catch((e)=>{
            setCompanies(['Backend Error. Unable to fetch data from our servers...'])
        })

    }, [])

    return (<>
        <Container className='mt-3'>
            <Row className='justify-content-md-center'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Available Companies</Card.Title>
                            <Card.Text>
                                Search for your company and chat with them for more information.
                            </Card.Text>
                            <Col md={6} className='m-auto'>
                                <InputGroup className='mb-3'>
                                    <InputGroup.Text id="inputGroup-sizing-lg">
                                        <FaSearch></FaSearch>
                                    </InputGroup.Text>
                                    <Form.Control value={searchedCompany} onChange={handleSearchChange} onKeyDown={(e)=>{handleEnterSubmit(e)}}/>
                                    {clearSearchBtn?
                                        <Button variant="outline-danger" onClick={handleSearchClear}>
                                            <MdClear></MdClear>
                                        </Button>
                                    :<></>}
                                    {showSearchBtn?
                                        <Button variant="outline-success" onClick={handleSearchSubmit}>
                                            <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                        </Button>
                                    :<></>}
                                </InputGroup>
                            </Col>
                            <Col md={8} className='m-auto'>
                                    <Table responsive striped bordered hover size="sm" variant='dark'>
                                        <thead>
                                            <tr>
                                                <th style={{width: "16%"}}>Company ID#</th>
                                                <th>Name</th>
                                                <th style={{width: "12%"}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {companies.map((company, index)=>{
                                                return (
                                                    <tr style={{padding:'5px'}}>
                                                        <td className='hover-effect' onClick={startChat}>
                                                            {company.id}
                                                        </td>
                                                        <td className='hover-effect' onClick={startChat}>
                                                            {company.company_name}
                                                        </td>
                                                        <td>
                                                            <Button size='sm' variant='primary' onClick={startChat}>
                                                                <RiRobot2Fill></RiRobot2Fill> Chat 
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </Table>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}