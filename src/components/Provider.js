import React,{Component} from 'react';
import {Container,Jumbotron,Card, Button, CardTitle, CardText, Row, Col, Table, Badge} from 'reactstrap';
import HBarChart from './HBarChart';
import TableAc from './TableAc';


export default class About extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          patients: []
        };
      }

    componentDidMount() {
        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/c19_patients/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ patients: data.items }) 
        })
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
        this.setState({ contacts: data }) 
    })
        .catch(console.log)
      }

    render(){
        return(
            <div>
                <Jumbotron fluid>
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
                <TableAc patients={this.state.patients} />
                </Col>
                </Row>
              </Container>
                </Jumbotron>
            </div>
        );
    }
}