import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  padding: 24px;

  > div:first-child {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    height: calc(100vh - 48px);
    
    width: 300px;

    padding: 40px 24px;

    position: fixed;

    background-color: #EFEFEF;
    border-radius: 16px;
  }

  > div:last-child {
    flex: 1;

    display: flex;
    flex-direction: column;

    padding: 40px 24px;

    margin-left: 324px;

    h1 {
      color: #6C8CBF;
    }

    h3 {
      color: #6F6F6F;

      font-weight: 400;
    }
  }
`;


export const DashboardHeader = styled.div`
  width: 100%;
  display: flex;

  flex-direction: row;

  max-height: 75px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;

  h3 {
    font-size: 16px;
  }

  > div:first-child {
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 32px;
  }

  > div:last-child {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 200px;
      height: 48px;

      font-weight: 700;

      border-radius: 8px;
    
      outline: none;
      border: none;

      margin-left: 8px;

      background-color: #6C8CBF;

      color: #FFF;

      transition: 0.25s ease;

      &:hover {
        background-color: #4A8B6D;
      }

      > svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  flex: 1;

  border-radius: 24px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);

  background-color: #FFF;

  span {
    color: #6F6F6F;
  }
`;

export const CardHeader = styled.div`
  padding: 32px;

  color: #6C8CBF;

  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 14px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;

  align-items: center;

  max-height: 80px;

  img {
    height: 70px;
  }

  > div {
    margin-left: 16px;

    span {
      color: #6C8CBF;

      font-size: 14px;
    }

    color: #6C8CBF;

    display: flex;
    
    flex-direction: column;
  }
`;
export const OptionsContainer = styled.div`
  margin-top: 48px;

  > div + div {
    margin-top: 32px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;

  font-weight: ${props => props.active ? 700 : 400};
  
  &:hover {
    cursor: pointer;

    > svg {
      fill: #6C8CBF;
    }

    > span {
      color: #6C8CBF;
    }
  }

  > svg {
    fill: ${props => props.active ? '#6C8CBF' : '#6F6F6F'};
  
    transition: 0.25s ease;
  }

  > span {
    margin-left: 8px;

    transition: 0.25s ease;

    color: ${props => props.active ? '#6C8CBF' : '#6F6F6F'};
  }
`;

export const Divider = styled.div`
  background-color: #E1E1E1;


  width: 100%;
  height: 1px;

  margin: 32px auto;
`;

export const ProfileContainer = styled.div`
  background-color: #6C8CBF;
  border-radius: 50%;

  img {
    max-height: 100%;
    border-radius: 50%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 24px;

  min-height: 600px;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;

  padding: 24px;

  strong {
    color: #6F6F6F;
    margin: 0 auto;
    margin-top: 24px;
    transition: ease 0.25s;

    &:hover {
      cursor: pointer;
      color: #6C8CBF;
    }
  }
`;

export const TableData = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 16px;
  flex-basis: ${props => props.flexBasis};
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;

  background-color: #6C8CBF;
  border-radius: 8px;

  span {
    color: #FFF;
    border-weight: 700;
  }

  margin-bottom: 16px;
  padding: 0 24px;
`;

export const TableLine = styled.div`
  display: flex;
  width: 100%;

  background-color: #FFF;
  border-radius: 8px;

  margin-bottom: 8px;
  padding: 0 24px;



  border: ${props => props.active ? "2px solid #6C8CBF" : '2px solid transparent'};

  span {
    color: #6F6F6F
  }


  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  }

  transition: ease 0.5s;

`;

export const MainLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-bottom: 24px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

export const TablesContainer = styled.div`
  display: flex;
`;

export const Side = styled.div`
  display: flex;
  width: 100%;

  &:first-child {
    margin-right: 24px;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    margin-bottom: 100px;
  }
`;