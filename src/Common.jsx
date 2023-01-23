import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from "react";
import { NavLink } from "react-router-dom";
import bimg from "../src/images/img9.jpg"
const Common = (props) =>{
    return( 
        
        <div className="overlay" id='img1' style={{background: `url(${bimg})`}}>
        
        <Container> 
        
        <Row className="container-fluid mb-4 pb-1">
        <Col className="col-10" id='header' md={{ span: 6, offset: 6}}><h2 style={{marginLeft:"15vh",fontSize:"38px",fontColor:"black",fontFamily: "Mr Dafoe",fontWeight:"bolder"}}>{props.name}
        <strong className="brand-name">Jp Cafe</strong></h2></Col>
        </Row>
        <Row className="container-fluid ">
        <Col className="col-10" md={{ span: 6, offset: 6}}> <h2 style={{marginLeft:"15vh",textAlign:"justify"}}>{props.dis}</h2></Col>
        <Col className="col-10" md={{ span: 6, offset: 6}}><NavLink style={{marginLeft:"15vh"}} to={props.visit} className="btn-get-started">{props.btname}</NavLink></Col>
        </Row>
      
        </Container>
        </div>
    )
}
export default Common;