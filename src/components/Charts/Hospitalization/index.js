import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from '../../../styles/colors';
import { addTransparency } from '../../../styles/utils';

import { ChartContainer } from '../styles';

function Hospitalization() {

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
          label: 'Internações',
          backgroundColor: addTransparency(colors[0], 0.5), 
          borderColor: colors[0],
          data: [4, 1, 4, 10, 3, 6, 4],
          order: 1
        },
        {
          label: 'Internações Involuntárias',
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1],
          data: [2, 1, 0, 3, 0, 2, 1],
          type: 'line',
          order: 0
        }]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-internacoes');
    
        new Chart(chartElement, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              title: {
                display: false
              },
            },
            responsive: true
          }
        });
      });

    return (
        <ChartContainer>
            <canvas id="chart-internacoes"></canvas>
        </ChartContainer>
    )
}

export default Hospitalization;