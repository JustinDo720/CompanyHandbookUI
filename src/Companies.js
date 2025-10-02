import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react' 
import axios from 'axios' 

export default function Companies() {
    const [companies, setCompanies] = useState([])

    useEffect(()=>{ 
        axios.get('http://localhost:8000/company/all').then((rep)=>{
            setCompanies(rep.data)
        })

    }, [])

    return (<>
        {companies?
            <>
                {companies.map((company, index)=>{
                    return (
                        <p key={index}>
                            {company.company_name}
                        </p>
                    )
                })}
            </>
        :<></>}
    </>)
}