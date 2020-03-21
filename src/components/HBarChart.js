import React from 'react';
import {Container} from 'reactstrap';
import { HorizontalBar } from 'react-chartjs-2';

export default class HBarChart extends React.Component {
  state = {
    dataHorizontal: {
      labels: ['Testovaní', 'Doručené jedlo', 'Celkom vybavených'],
      datasets: [
        { label: "Dátový súbor",  
          data: [22, 33, 55],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(99, 203, 54, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(54, 203, 54)'
          ],
          borderWidth: 1
        }
      ]
    }
  };

  render() {
    return (
      <Container>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </Container>
    );
  }
}
