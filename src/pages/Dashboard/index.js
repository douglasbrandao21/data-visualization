import { useHistory } from 'react-router';
import { format } from 'date-fns'

import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md'

import DoctorsAppointments from '../../components/Charts/DoctorsAppointments';
import Hospitalization from '../../components/Charts/Hospitalization';
import Emergency from '../../components/Charts/Emergency';


import { 
  Card,
  Container,
  DashboardHeader,
  CardLine,
  CardHeader,
  ProfileHeader, 
  OptionsContainer,
  Option,
  Divider,
  ProfileContainer,
  ChartContainer
} from './styles';

import profileImage from '../../assets/images/doctor.png';
import MedicalDischarges from '../../components/Charts/MedicalDischarges';

function Dashboard() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("user");

    history.push("/");
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
            <Option active>
              <MdDashboard size={20}></MdDashboard>
              <span>Home</span>
            </Option>

            <Option onClick={() => history.push("pacientes")}>
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
              <h1>Home</h1>
              <h3>Os gráficos a seguir ilustram indicadores importantes para o bom funcionamento do hospital.</h3>
            </div>
          </div>

          <div>
          </div>
        </DashboardHeader>

        <CardLine>
          <Card>
            <CardHeader>
              <h1>Consultas médicas</h1>
              <h3>O gráfico a seguir ilustra o número de consultas agendadas para o dia {format(new Date(), 'dd/MM/yyyy')}, distinguido-as por médico responsável.</h3>
            </CardHeader>

            <DoctorsAppointments></DoctorsAppointments>
          </Card>

          <Card>
            <CardHeader>
              <h1>Altas médicas </h1>
              <h3>O gráfico a seguir ilustra os motivos de alta hospitalar dos últimos 7 dias por porcentagem.</h3>
            </CardHeader>

            <MedicalDischarges></MedicalDischarges>
          </Card>
        </CardLine>

        <CardLine>
          <Card>
            <CardHeader>
              <h1>Emergências</h1>
              <h3>O gráfico a seguir ilustra os atendimentos de emergência referentes aos últimos 7 dias, distinguindo-os por estado de atendimento.</h3>
            </CardHeader>

            <ChartContainer>
              <Emergency></Emergency>
            </ChartContainer>
          </Card>

          <Card>
            <CardHeader>
              <h1>Internações</h1>
              <h3>O gráfico a seguir ilustra as internações referentes aos últimos 7 dias, distinguindo-as por natureza de internação.</h3>
            </CardHeader>

            <Hospitalization></Hospitalization>
          </Card>
        </CardLine>
      </div>
    </Container>
  );
}

export default Dashboard;