import React,{Component} from 'react';
import {Container,Jumbotron,Progress} from 'reactstrap';
import {Button, Card, CardImg, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';


export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          albums:[],
          patients: []
        };
      }


    componentDidMount() {
        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/transactions/list/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ patients: data.items }) 
        })
        .catch(console.log)
      }

    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Stav vybavenia požiadavky</p>
                <hr className="my-2" />
                <p><Progress multi>
                    <Progress animated bar value="10">V systéme</Progress>
                    <Progress animated bar color="success" value="30" >Na ceste k Vám</Progress>
                   </Progress>
                </p>
                <Card body outline color="danger">
                    
                    <CardTitle><h2>Vybrali ste si: Otestovanie na infekciu COVID19</h2></CardTitle>
                    <CardText>Pripravte na príjazd zdravotníckych pracovníkov na uvedenej adrese. Zelená farba ukazovateľa znamená, že sú na ceste.</CardText>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Na ceste k Vám</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="je posádka vozidla BA789AG s doktorom Šrobárom" />
                        </InputGroup>
                        <br /><p/>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Osoba</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="" />
                        </InputGroup>
                        <br /><p/>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Adresa</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="" />
                        </InputGroup>
                        
                </Card>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}