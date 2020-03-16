import React,{Component} from 'react';
import {Container,Jumbotron,Button} from 'reactstrap';


export default class About extends Component{

    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Rýchla pomoc.</p>
                <hr className="my-2" />
                <p></p>
                
              </Container>
                </Jumbotron>
            </div>
        );
    }
}