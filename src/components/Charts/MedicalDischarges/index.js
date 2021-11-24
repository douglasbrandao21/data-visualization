import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from '../../../styles/colors';
import { addTransparency } from '../../../styles/utils';

import { ChartContainer } from '../styles';

function MedicalDischarges() {

    const labels = [
        'Abandono',
        'A pedido',
        'Fuga',
        'Hospitalar',
        'Transferência'
      ];

      const data = {
        labels: labels,
        datasets: [
        {
            label: 'A pedido',
            backgroundColor: [addTransparency(colors[0], 0.5), addTransparency(colors[1], 0.5), addTransparency(colors[2], 0.5), addTransparency(colors[3], 0.5), addTransparency(colors[4], 0.5)],
            data: [2.94, 14.71, 14.71, 64.71, 2.94],
          }]
      };

      useEffect(() => {
        const chartElement = document.getElementById('chart-altas');
    
        const configurations = {
            type: 'doughnut',
            data: data,
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: false
                }
              }
            },
          };

        new Chart(chartElement, configurations);
      });

    return (
        <ChartContainer>
            <canvas id="chart-altas"></canvas>
        </ChartContainer>
    )
}

export default MedicalDischarges;