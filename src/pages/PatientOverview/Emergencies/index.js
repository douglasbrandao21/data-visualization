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
import Emergency from '../../../components/Charts/PatientOverview/Emergency';

function Emergencies( props ) {
  const history = useHistory();

  const [emergencyActive, setEmergencyActive] = useState(0);

  
  const dataEmergency = [
    {
      labels: ['F03','F23','F28','F29','F60','F61','F62'],
      datasets: [
        {
          label: 'Emergência 10437',
          data: [2, 2, 6, 6, 4, 4, 4,],
          backgroundColor: addTransparency(colors[1], 0.5),
          borderColor: colors[1]
        }
      ]
    },
    {
      labels: ['F19','F32','F33','F41','F60','F61','F62'],
      datasets: [
        {
          label: 'Emergência 10456',
          data: [3, 1, 1, 1, 2, 2, 2],
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
              <h1>Emergências do Paciente {props.match.params.id}</h1>
              <h3>Selecione uma das emergências do paciente para visualizar seus dados de CID.</h3>
            </div>
          </div>

          <div>
          </div>
        </DashboardHeader>

        <MainContainer>
            <Side>
              <Card>
                <CardHeader>
                  <h1>Emergências</h1>
                  <h3>A tabela a seguir contém informações a respeito das emergências do paciente. Selecione um dos registros para visualizar as informações de CID da emergência.</h3>
                </CardHeader>

                <TableContainer>
                  <TableHeader>
                    <TableData flexBasis="15%"><span>ID</span></TableData>
                    <TableData flexBasis="35%"><span>MÉDICO OBSERVAÇÃO</span></TableData>
                    <TableData flexBasis="25%"><span>DATA DE ENTRADA</span></TableData>
                    <TableData flexBasis="25%"><span>TIPO PACIENTE</span></TableData>
                  </TableHeader>

                  <TableLine onClick={() => setEmergencyActive(10437)} active={emergencyActive === 10437}>
                    <TableData flexBasis="15%"><span>10437</span></TableData>
                    <TableData flexBasis="35%"><span>MÉDICO 858684</span></TableData>
                    <TableData flexBasis="25%"><span>31/07/2019</span></TableData>
                    <TableData flexBasis="25%"><span>SUS</span></TableData>
                  </TableLine>

                  <TableLine onClick={() => setEmergencyActive(10456)} active={emergencyActive === 10456}>
                    <TableData flexBasis="15%"><span>10456</span></TableData>
                    <TableData flexBasis="35%"><span>MÉDICO 662231</span></TableData>
                    <TableData flexBasis="25%"><span>01/08/2019</span></TableData>
                    <TableData flexBasis="25%"><span>SUS</span></TableData>
                  </TableLine>
                </TableContainer>
              </Card>
            </Side>

            <Side>
              <Card>
                <CardHeader>
                  <h1>CIDs da Internação</h1>
                  <h3>O gráfico a seguir ilustra o número de consultas agendadas para o dia  distinguido-as por médico responsável.</h3>
                </CardHeader>

                {emergencyActive === 10437 && <Emergency configurations={BuildChart(dataEmergency[0])} id="chart-emergency1"></Emergency>}
                {emergencyActive === 10456 && <Emergency configurations={BuildChart(dataEmergency[1])} id="chart-emergency2"></Emergency>}

                {
                  emergencyActive === 0 && 
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

export default Emergencies;