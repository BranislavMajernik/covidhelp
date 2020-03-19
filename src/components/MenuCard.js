import React, {Component} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';


import { 	withRouter } from 'react-router-dom';
import axios from 'axios';

class MenuCard extends Component{
  constructor(props) {
    super(props);
    this.onChangeSMS1 = this.onChangeSMS1.bind(this);
    this.onChangeSMS2 = this.onChangeSMS2.bind(this);
    
    this.state = {
        SMSNumber1: '',
        SMSNumber2: ''
    }
    }
    onChangeSMS1(e) {
        this.setState({
            SMSNumber1: e.target.value
        });
        
    }
    onChangeSMS2(e) {
      this.setState({
          SMSNumber2: e.target.value
      });
      
    }
    onSubmit1(e) {
      e.preventDefault();
      const obj = {
          SMSNumber1: this.state.SMSNumber1
      };
      
      axios.post('http://localhost:4000/verify/addsms1',obj)
          .then(res => console.log(res.data));
             
      this.setState({
          SMSNumber1: '',
      })  
      this.props.history.push('/result');
      }

      onSubmit2(e) {
        e.preventDefault();
        const obj = {
            SMSNumber2: this.state.SMSNumber2
        };
        
        axios.post('http://localhost:4000/verify/addsms2',obj)
            .then(res => console.log(res.data));
               
        this.setState({
            SMSNumber2: '',
        })  
        this.props.history.push('/result');
        }

    render(){
        return (
    <Row> 
      <Col sm="2"></Col>  
      <Col sm="4">
        <Card body outline color="danger">
        <form onSubmit={this.onSubmit1.bind(this)}>   
          <CardTitle><h2>Otestovanie na infekciu COVID19</h2></CardTitle>
          <CardText>Po úspešnom odoslaní sa pripravte na príjazd zdravotníckych pracovníkov na adrese, ktorú ste uviedli.</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Overovací kód</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.onChangeSMS1} onChange={this.onChangeSMS1} placeholder="zadajte 4 ciferný overovací kód z SMS" />
            </InputGroup>
          <Button type="submit" color="danger">Potrebujem testovanie</Button>
          </form>
        </Card>
      </Col>
      <Col sm="4"> 
        <Card body outline color="primary">
        <form onSubmit={this.onSubmit2.bind(this)}>   
          <CardTitle><h2>Donáška jedla ľuďom v karanténe</h2></CardTitle>
          <CardText>Po úspešnom odoslaní sa pripravte na príjazd donáškovej služby na adrese, ktorú ste uviedli.</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Overovací kód</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.onChangeSMS2} onChange={this.onChangeSMS2} placeholder="zadajte 4 ciferný overovací kód z SMS" />
            </InputGroup>
          <Button type="submit" color="primary">Potrebujem donášku</Button>
          </form>
        </Card>
      </Col>
    </Row>
          );
    }
}

export default withRouter(MenuCard);