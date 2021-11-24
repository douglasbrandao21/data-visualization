import { useEffect } from 'react';
import Chart from 'chart.js/auto';


import { ChartContainer } from '../../styles';

function Emergency({ configurations, id }) {
      useEffect(() => {

        let chartElement;

        if(id === "chart-emergency1")
          chartElement = document.getElementById("chart-emergency1");

        if(id === "chart-emergency2")
          chartElement = document.getElementById("chart-emergency2");
    
        new Chart(chartElement, configurations);
      });

    return (
        <ChartContainer>
            {id === "chart-emergency1" && <canvas id="chart-emergency1"></canvas>}
            {id === "chart-emergency2" && <canvas id="chart-emergency2"></canvas>}
        </ChartContainer>
    )
}

export default Emergency;