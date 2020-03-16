import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

export default class InitForm extends Component {
    render(){
        return ( 
            <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Telefónne číslo</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="zadajte Vaše telefónne číslo" />
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Meno</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Natálka" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Priezvisko</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Novák" />
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Ulica</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Karloveská" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Číslo</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="35" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Mesto/Obec</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Bratislava" />    
            </InputGroup>
            <br />
            <Button color="success">Odoslať</Button>
            </div>
            );
    }
};



