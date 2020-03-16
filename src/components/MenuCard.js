import React, {Component} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

export default class MenuCard extends Component{
    render(){
        return (
    <Row> 
      <Col sm="2"></Col>  
      <Col sm="4">
        <Card body outline color="danger">
          <CardTitle><h2>Otestovanie na infekciu COVID19</h2></CardTitle>
          <CardText>Po úspešnom odoslaní sa pripravte na príjazd zdravotníckych pracovníkov na adrese, ktorú ste uviedli.</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Overovací kód</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="zadajte 4 ciferný overovací kód z SMS" />
            </InputGroup>
          <Button color="danger">Potrebujem testovanie</Button>
        </Card>
      </Col>
      <Col sm="4"> 
        <Card body outline color="primary">
          <CardTitle><h2>Donáška jedla ľuďom v karanténe</h2></CardTitle>
          <CardText>Po úspešnom odoslaní sa pripravte na príjazd donáškovej služby na adrese, ktorú ste uviedli.</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Overovací kód</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="zadajte 4 ciferný overovací kód z SMS" />
            </InputGroup>
          <Button color="primary">Potrebujem donášku</Button>
        </Card>
      </Col>
    </Row>
          );
    }
}