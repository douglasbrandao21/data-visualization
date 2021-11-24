import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from  '../../../styles/colors';
import { addTransparency } from  '../../../styles/utils';

import { ChartContainer } from '../styles';

function Emergency() {

    const labels = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
        'Domingo'
      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Aguardando atendimento',
          backgroundColor: addTransparency(colors[0], 0.5),
          data: [8,12,16,12,15,14,6],
        },
        {
          label: 'Acolhido',
          backgroundColor: addTransparency(colors[1], 0.5),
          data: [16,10,1,19,18,16]
        },
        {
          label: 'Observação solicitada',
          backgroundColor: addTransparency(colors[5], 0.5),
         
          data: [0, 2, 0, 0, 0, 3, 2],
        },
        {
          label: 'Em observação',
          backgroundColor: addTransparency(colors[3], 0.5),
          data: [3, 17, 6, 5, 9, 8, 6],
        }]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-emergencias');
    
        new Chart(chartElement, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              title: {
                display: false
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        });
      });

    return (
        <ChartContainer>
            <canvas id="chart-emergencias"></canvas>
        </ChartContainer>
    )
}

export default Emergency;