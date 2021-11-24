import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import colors from  '../../../../styles/colors';
import { addTransparency } from  '../../../../styles/utils';

import { ChartContainer } from '../../styles';

function PatientsOverview() {
      const data = {
        labels: [
            'Ensino médio completo', 
            'Ensino médio incompleto', 
            'Mais de 2 salários mínimos', 
            'Menos de 2 salários mínimos', 
            'Com convênio', 
            'Sem convênio'
        ],
        datasets: [
          {
            backgroundColor: [addTransparency(colors[0], 0.5), addTransparency(colors[1], 0.5)],
            data: [79, 219]
          },
          {
            backgroundColor: [addTransparency(colors[2], 0.5), addTransparency(colors[3], 0.5)],
            data: [100, 198]
          },
          {
            backgroundColor: [addTransparency(colors[4], 0.5), addTransparency(colors[5], 0.5)],
            data: [53, 245]
          }
        ]
      };

      useEffect(() => {

        const chartElement = document.getElementById('chart-visao-geral-pacientes');
    
        const configurations = {
            type: 'pie',
            data: data,
            options: {
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    generateLabels: function(chart) {
                      const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                      const labelsOriginal = original.call(this, chart);
          
                      let datasetColors = chart.data.datasets.map(function(e) {
                        return e.backgroundColor;
                      });
                      datasetColors = datasetColors.flat();
          
                      labelsOriginal.forEach(label => {
                        label.datasetIndex = (label.index - label.index % 2) / 2;
                        label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                        label.fillStyle = datasetColors[label.index];
                      });
          
                      return labelsOriginal;
                    }
                  },
                  onClick: function(mouseEvent, legendItem, legend) {
                    legend.chart.getDatasetMeta(
                      legendItem.datasetIndex
                    ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
                    legend.chart.update();
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                      return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                    }
                  }
                }
              }
            },
          };

        new Chart(chartElement, configurations);
      });

    return (
        <ChartContainer>
            <canvas id="chart-visao-geral-pacientes"></canvas>
        </ChartContainer>
    )
}

export default PatientsOverview;