import React,{Component} from 'react';
import {Container,Jumbotron,Card, Button, CardTitle, CardText, Row, Col, Table, Badge} from 'reactstrap';
import HBarChart from './HBarChart';
import TableAc from './TableAc';
import TableAcd from './TableAcd';
import axios from 'axios';
import bgimage from './hero_bg_blue.png'


export default class About extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          patients: []
        };
      }

    componentDidMount() {


      axios.get('Access-Control-Allow-Origin: https://localhost:3000/api/patients/')
      .then(function (response) {
        this.setState({ patients: response })
      // handle success
      console.log(response);
      })
      .catch(function (error) {
      // handle error
      console.log(error);
      })


      //  fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/c19_patients/')
        fetch('https://127.0.0.1:4000/api/patients/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ patients: data })
          console.log(data); 
        })
        //fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/k19_clients/')
        fetch('https://localhost:4000/api/clients/')
        .then(res => res.json())
        .then((data) => {
        this.setState({ contacts: data.items }) 
    })
        .catch(console.log)
      }

    render(){
        return(
            <div>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Poskytovatelia.</p>
                <Row>
                <Col sm="2"> </Col>
                <Col sm="2">    
                <Card body inverse color="danger">
                <Button color="warning" outline>
                    Počet čakajúcich pacientov <h2><Badge color="secondary">4</Badge></h2>
                </Button>
                </Card>
                </Col>
                <Col sm="2">    
                <Card body inverse color="primary">
                <Button color="warning" outline>
                    Počet čakajúcich na jedlo <h2><Badge color="secondary">8</Badge></h2>
                </Button>
                </Card>
                </Col>
                <Col sm="2">    
                <HBarChart/>
                </Col>
                </Row>
                <hr className="my-2" />
                <p></p>
                <Row>
                <Col sm="4">
                <TableAc patients={this.state.patients} />
                </Col> 
                <Col sm="4">
                <TableAcd patients={this.state.contacts} />
                </Col>
                </Row>
              </Container>
                </Jumbotron>
            </div>
        );
    }
}