import { useEffect } from 'react';
import Chart from 'chart.js/auto';


import { ChartContainer } from '../../styles';

function Hospitalization({ configurations, id }) {
      useEffect(() => {
        const chartElement = document.getElementById(id);

        new Chart(chartElement, configurations);
      });

    return (
        <ChartContainer>
            <canvas id={id}></canvas>
        </ChartContainer>
    )
}

export default Hospitalization;