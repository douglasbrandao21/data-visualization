import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from '../../../styles/colors';
import { addTransparency } from '../../../styles/utils';

import { ChartContainer } from '../styles';

function DoctorsAppointments() {

    const labels = [
        'Médico 1',
        'Médico 2',
        'Médico 3',
        'Médico 4',
        'Médico 5',
        'Médico 6'
      ];

      const data = {
        labels: labels,
        datasets: [{
          backgroundColor: [
            addTransparency(colors[0], 0.5), addTransparency(colors[1], 0.5), addTransparency(colors[2], 0.5), addTransparency(colors[3], 0.5), addTransparency(colors[4], 0.5), addTransparency(colors[5], 0.5), addTransparency(colors[6], 0.5),
          ],
          data: [7, 7, 2, 8, 3, 9],
        }]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-consultas-medicos');
    
        const configurations = {
            type: 'polarArea',
            data: data,
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: false,
                }
              }
            },
          };

        new Chart(chartElement, configurations);
      });

    return (
        <ChartContainer>
            <canvas id="chart-consultas-medicos"></canvas>
        </ChartContainer>
    )
}

export default DoctorsAppointments;