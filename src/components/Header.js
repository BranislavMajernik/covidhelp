import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';

import InitForm from './InitForm';

export default class Header extends Component{
    render(){
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">COVID Pomoc</h1>
                <p className="lead"><h3>Prosím zadajte svoje telefónne číslo. Pošleme Vám spätne SMS kód na kontrolu. Pre doručenie služby vyplňte všetky uvedené údaje !</h3></p>
                <p className="lead">
                  <InitForm></InitForm>
                </p>
                <hr className="my-2" />
                <p>Po odoslaní by ste obratom mali dostať 4 ciferný kód. Ten zadajte do príslušnej karty nizšie podľa toho, akú pomoc potrebuje.</p>
              </Jumbotron>
            </div>
          );
    }
}

