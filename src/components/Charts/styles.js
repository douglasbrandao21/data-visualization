import styled from 'styled-components';

export const ChartContainer = styled.div`
  flex: 1;

  position: relative;

  > canvas {
    max-height: 400px;

    margin: 32px;
  }
`;