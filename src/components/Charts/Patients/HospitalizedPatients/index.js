import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from  '../../../../styles/colors';
import { addTransparency } from  '../../../../styles/utils';

import { ChartContainer } from '../../styles';

function HospitalizedPatients() {

    const labels = [
        'Internação',
        'Emergência'
      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Masculino',
          backgroundColor: addTransparency(colors[0], 0.5),
          data: [128, 34],
        },
        {
            label: 'Feminino',
            backgroundColor: addTransparency(colors[1], 0.5),
            data: [89, 47],
          }]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-pacientes-hospitalizados');
    
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
            <canvas id="chart-pacientes-hospitalizados"></canvas>
        </ChartContainer>
    )
}

export default HospitalizedPatients;