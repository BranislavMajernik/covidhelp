import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import bgimage from './hero_bg_blue.png'
import InitForm from './InitForm';
import MenuCard from './MenuCard';

export default class Header extends Component{
    render(){
        return (
          <div>
          <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
            <h1 className="display-5">COVID Pomoc</h1>
            <p className="lead">Prosím zadajte svoje telefónne číslo. Pošleme Vám spätne SMS kód na kontrolu. Pre doručenie služby vyplňte všetky uvedené údaje !</p>
              <InitForm/>
            <hr className="my-2" />
            <p>Po odoslaní by ste obratom mali dostať 4 ciferný kód. Ten zadajte do príslušnej karty nizšie podľa toho, akú pomoc potrebuje.</p>
              <MenuCard/>
          </Jumbotron>
        </div>
          );
    }
}

