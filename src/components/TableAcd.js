import React from 'react'

import { Card, CardTitle, CardText, Button} from "reactstrap";

    const TableAcd = ({ patients }) => {
      return (
        <div>  
            {patients.map((patient) => (  
              <Card body outline color="primary">
              <CardTitle>{patient.firstname} {patient.lastname}</CardTitle>
            <CardText>Adresa: {patient.street} {patient.strnumber}, {patient.city} ; Telefón: {patient.telephone}</CardText>
                    <Button color="secondary">Prevziať</Button> 
            </Card>
           ))}  
        </div>
      )
    };

export default TableAcd