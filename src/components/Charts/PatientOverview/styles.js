import styled from 'styled-components';

export const ChartContainer = styled.div`
  flex: 1;
  width: ${props => props.active ? "100%" : "0px"};

  position: relative;

  > canvas {
    max-height: 400px;

    margin: 32px;
  }
`;