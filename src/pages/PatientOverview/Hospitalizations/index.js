import { useState } from 'react';
import { useHistory } from 'react-router';

import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md'

import colors from  '../../../styles/colors';
import { addTransparency } from '../../../styles/utils';

import { 
  Card,
  Container,
  DashboardHeader,
  CardHeader,
  ProfileHeader, 
  OptionsContainer,
  Option,
  Divider,
  ProfileContainer,
  MainContainer,
  TableContainer,
  TableLine,
  TableData,
  TableHeader,
  Side,
  MessageContainer
} from '../styles';

import profileImage from '../../../assets/images/doctor.png';
import Hospitalization from '../../../components/Charts/PatientOverview/Hospitalization';

function Hospitalizations(props) {
  const history = useHistory();

  const [active, setActive] = useState(0);
 
  const dataHospitalization = [
    {
      labels: ['F17','F20','F23'],
      datasets: [
        {
          label: 'Internação 43452',
          data: [18,38,30],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    },
    {
      labels: ['F17','F20','F23','F60','F61','F62'],
      datasets: [
        {
          label: 'Internação 60075',
          data: [16, 52, 38, 16, 16, 16],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    },
    {
      labels: ['F34','F38','F39','F41','F60','F61','F62'],
      datasets: [
        {
          label: 'Internação 66919',
          data: [6, 6, 6, 4, 4, 4, 4],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    },
    {
      labels: ['F28','F29','F41','F51','F60','F61','F62'],
      datasets: [
        {
          label: 'Internação 74673',
          data: [6, 6, 2, 6, 4, 4, 4],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    },
    {
      labels: ['F20','F23','F51','F60','F61','F62'],
      datasets: [
        {
          label: 'Internação 78507',
          data: [10, 2, 1, 3, 3, 3],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    }
  ];

  function logout() {
    localStorage.removeItem("user");

    history.push("/");
  }

  function BuildChart(data) {
      const configurations = {
        type: 'radar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: false
            }
          },
          scale: {
            min: 0,
        },
        },
        scale: {
          ticks: {
              beginAtZero: true,
              stepSize: 1
          }
        }
      };
      
      return configurations;
  }

  return (
    <Container>
      <div>
        <div>
          <ProfileHeader>
            <ProfileContainer>
              <img src={profileImage} alt="user_profile"/>
            </ProfileContainer>

            <div>
              <span>Bem vindo,</span>
              <strong>Usuário 141282</strong>
            </div>
          </ProfileHeader>

          <Divider />

          <OptionsContainer>
            <Option onClick={() => history.push("/home")}>
              <MdDashboard size={20}></MdDashboard>
              <span>Home</span>
            </Option>

            <Option active onClick={() => history.push("/pacientes")}>
              <FaUser size={20}></FaUser>
              <span>Pacientes</span>
            </Option>
          </OptionsContainer>
        </div>

        <div>
          <Divider />

          <Option onClick={logout}>
            <AiOutlineLogout size={20}></AiOutlineLogout>
            <span>Logout</span>
          </Option>
        </div>
      </div>

      <div>
        <DashboardHeader>
          <div>
            <div>
              <h1>Internações do Paciente {props.match.params.id}</h1>
              <h3>Selecione uma das internações do paciente para visualizar seus dados de CID.</h3>
            </div>
          </div>

          <div>
          </div>
        </DashboardHeader>

        <MainContainer>
            <Side>
              <Card>
                <CardHeader>
                  <h1>Internações</h1>
                  <h3>A tabela a seguir contém informações a respeito das internações do paciente. Selecione um dos registros para visualizar as informações de CID da internação.</h3>
                </CardHeader>

                <TableContainer>
                  <TableHeader>
                    <TableData flexBasis="10%"><span>ID</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDICO RESPONSÁVEL</span></TableData>
                    <TableData flexBasis="20%"><span>DATA DE ENTRADA</span></TableData>
                    <TableData flexBasis="25%"><span>TIPO PACIENTE</span></TableData>
                    <TableData flexBasis="15%"><span>NATUREZA</span></TableData>
                  </TableHeader>

                  <TableLine onClick={() => setActive(43452)} active={active === 43452}>
                    <TableData flexBasis="10%"><span>43452</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDICO 284280</span></TableData>
                    <TableData flexBasis="20%"><span>20/12/2013</span></TableData>
                    <TableData flexBasis="25%"><span>SUS</span></TableData>
                    <TableData flexBasis="15%"><span>Voluntária</span></TableData>
                  </TableLine>

                  <TableLine onClick={() => setActive(60075)} active={active === 60075}>
                    <TableData flexBasis="10%"><span>60075</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDIDO 156754</span></TableData>
                    <TableData flexBasis="20%"><span>17/12/2013</span></TableData>
                    <TableData flexBasis="25%"><span>SUS</span></TableData>
                    <TableData flexBasis="15%"><span>Voluntária</span></TableData>
                  </TableLine>

                  <TableLine onClick={() => setActive(66919)} active={active === 66919}>
                    <TableData flexBasis="10%"><span>66919</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDICO 345871</span></TableData>
                    <TableData flexBasis="20%"><span>06/02/2008</span></TableData>
                    <TableData flexBasis="25%"><span>Particular</span></TableData>
                    <TableData flexBasis="15%"><span>Voluntária</span></TableData>
                  </TableLine>

                  <TableLine onClick={() => setActive(74673)} active={active === 74673}>
                    <TableData flexBasis="10%"><span>74673</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDICO 976084</span></TableData>
                    <TableData flexBasis="20%"><span>02/04/2015</span></TableData>
                    <TableData flexBasis="25%"><span>Particular</span></TableData>
                    <TableData flexBasis="15%"><span>Voluntária</span></TableData>
                  </TableLine>

                  <TableLine onClick={() => setActive(78507)} active={active === 78507}>
                    <TableData flexBasis="10%"><span>78507</span></TableData>
                    <TableData flexBasis="30%"><span>MÉDICO 124305</span></TableData>
                    <TableData flexBasis="20%"><span>10/10/2017</span></TableData>
                    <TableData flexBasis="25%"><span>Particular</span></TableData>
                    <TableData flexBasis="15%"><span>Voluntária</span></TableData>
                  </TableLine>
                </TableContainer>
              </Card>
            </Side>

            <Side>
              <Card>
                <CardHeader>
                  <h1>CIDs da Internação</h1>
                  <h3>O gráfico a seguir ilustra os CIDs identificados nas notas clínicas pertencentes a internação selecionada.</h3>
                </CardHeader>

                {active === 43452 && <Hospitalization configurations={BuildChart(dataHospitalization[0])} id="chart-hospitalization1"></Hospitalization>}
                {active === 60075 && <Hospitalization configurations={BuildChart(dataHospitalization[1])} id="chart-hospitalization2"></Hospitalization>}
                {active === 66919 && <Hospitalization configurations={BuildChart(dataHospitalization[2])} id="chart-hospitalization3"></Hospitalization>}
                {active === 74673 && <Hospitalization configurations={BuildChart(dataHospitalization[3])} id="chart-hospitalization4"></Hospitalization>}
                {active === 78507 && <Hospitalization configurations={BuildChart(dataHospitalization[4])} id="chart-hospitalization5"></Hospitalization>}

                {
                  active === 0 && 
                  <MessageContainer>
                    <span>Nenhuma emergência selecionada</span>
                  </MessageContainer>
                }
                
              </Card>
            </Side>
        </MainContainer>
      </div>
    </Container>
  );
}

export default Hospitalizations;