import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { format } from 'date-fns'

import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md'

import PatientsOverview from '../../components/Charts/Patients/PatientsOverview';
import HospitalizedPatients from '../../components/Charts/Patients/HospitalizedPatients';

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
  Content,
  Side
} from './styles';

import profileImage from '../../assets/images/doctor.png';

function Patients({routes}) {
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
            <Option onClick={() => history.push("home")}>
              <MdDashboard size={20}></MdDashboard>
              <span>Home</span>
            </Option>

            <Option active onClick={() => history.push("pacientes")}>
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
              <h1>Pacientes</h1>
              <h3>Visualize informações gerais dos pacientes hospitalizados no hospital ou selecione um paciente em específico para visualizar suas informações de internações e emergências.</h3>
            </div>
          </div>

          <div>
          </div>
        </DashboardHeader>

        <MainContainer>
          <Side>
            <TableContainer>
              <TableHeader>
                <TableData flexBasis="20%"><span>CPF</span></TableData>
                <TableData flexBasis="20%"><span>NOME</span></TableData>
                <TableData flexBasis="15%"><span>IDADE</span></TableData>
                <TableData flexBasis="15%"><span>SEXO</span></TableData>
                <TableData flexBasis="30%"><span>AÇÕES</span></TableData>
              </TableHeader>

              <TableLine>
                <TableData flexBasis="20%"><span>562.681.960-66</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283400</span></TableData>
                <TableData flexBasis="15%"><span>70</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283400">Internações</Link><span>|</span><Link to="/paciente/emergencias/283400">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>172.235.810-69</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283383</span></TableData>
                <TableData flexBasis="15%"><span>38</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283383">Internações</Link><span>|</span><Link to="/paciente/emergencias/283383">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>321.512.590-05</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283384</span></TableData>
                <TableData flexBasis="15%"><span>43</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283384">Internações</Link><span>|</span><Link to="/paciente/emergencias/283384">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>003.376.230-90</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283385</span></TableData>
                <TableData flexBasis="15%"><span>40</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283385">Internações</Link><span>|</span><Link to="/paciente/emergencias/283385">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>849.092.140-70</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283386</span></TableData>
                <TableData flexBasis="15%"><span>47</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283386">Internações</Link><span>|</span><Link to="/paciente/emergencias/283386">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>146.861.900-45</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283387</span></TableData>
                <TableData flexBasis="15%"><span>68</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283387">Internações</Link><span>|</span><Link to="/paciente/emergencias/283387">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>146.861.900-45</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283388</span></TableData>
                <TableData flexBasis="15%"><span>51</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283388">Internações</Link><span>|</span><Link to="/paciente/emergencias/283388">Emergências</Link></TableData>
              </TableLine>
              
              <TableLine>
                <TableData flexBasis="20%"><span>148.804.100-80</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283389</span></TableData>
                <TableData flexBasis="15%"><span>47</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283389">Internações</Link><span>|</span><Link to="/paciente/emergencias/283389">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>118.082.720-13</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283390</span></TableData>
                <TableData flexBasis="15%"><span>38</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283390">Internações</Link><span>|</span><Link to="/paciente/emergencias/283390">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>375.368.860-63</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283391</span></TableData>
                <TableData flexBasis="15%"><span>55</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283391">Internações</Link><span>|</span><Link to="/paciente/emergencias/283391">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>375.368.860-63</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283392</span></TableData>
                <TableData flexBasis="15%"><span>69</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283392">Internações</Link><span>|</span><Link to="/paciente/emergencias/283392">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>188.643.230-90</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283393</span></TableData>
                <TableData flexBasis="15%"><span>42</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283393">Internações</Link><span>|</span><Link to="/paciente/emergencias/283393">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>726.831.610-00</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283394</span></TableData>
                <TableData flexBasis="15%"><span>53</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283394">Internações</Link><span>|</span><Link to="/paciente/emergencias/283394">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>158.579.650-63</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283395</span></TableData>
                <TableData flexBasis="15%"><span>44</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283395">Internações</Link><span>|</span><Link to="/paciente/emergencias/283395">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>932.558.890-06</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283396</span></TableData>
                <TableData flexBasis="15%"><span>31</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283396">Internações</Link><span>|</span><Link to="/paciente/emergencias/283396">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>233.550.600-54</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283397</span></TableData>
                <TableData flexBasis="15%"><span>32</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283397">Internações</Link><span>|</span><Link to="/paciente/emergencias/283397">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>705.526.500-21</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283398</span></TableData>
                <TableData flexBasis="15%"><span>53</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283398">Internações</Link><span>|</span><Link to="/paciente/emergencias/283398">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>448.397.270-74</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283399</span></TableData>
                <TableData flexBasis="15%"><span>67</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283399">Internações</Link><span>|</span><Link to="/paciente/emergencias/283399">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>517.043.590-82</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283400</span></TableData>
                <TableData flexBasis="15%"><span>52</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283400">Internações</Link><span>|</span><Link to="/paciente/emergencias/283400">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>831.742.390-52</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283401</span></TableData>
                <TableData flexBasis="15%"><span>32</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283401">Internações</Link><span>|</span><Link to="/paciente/emergencias/283401">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>988.237.660-60</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283402</span></TableData>
                <TableData flexBasis="15%"><span>42</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283402">Internações</Link><span>|</span><Link to="/paciente/emergencias/283402">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>687.528.640-81</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283403</span></TableData>
                <TableData flexBasis="15%"><span>69</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283403">Internações</Link><span>|</span><Link to="/paciente/emergencias/283403">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>069.872.710-03</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283404</span></TableData>
                <TableData flexBasis="15%"><span>70</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283404">Internações</Link><span>|</span><Link to="/paciente/emergencias/283404">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>976.518.100-07</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283405</span></TableData>
                <TableData flexBasis="15%"><span>36</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283405">Internações</Link><span>|</span><Link to="/paciente/emergencias/283405">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>771.774.040-07</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283406</span></TableData>
                <TableData flexBasis="15%"><span>64</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283406">Internações</Link><span>|</span><Link to="/paciente/emergencias/283406">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>116.437.010-37</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283407</span></TableData>
                <TableData flexBasis="15%"><span>66</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283407">Internações</Link><span>|</span><Link to="/paciente/emergencias/283407">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>610.653.730-58</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283408</span></TableData>
                <TableData flexBasis="15%"><span>57</span></TableData>
                <TableData flexBasis="15%"><span>Feminino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283408">Internações</Link><span>|</span><Link to="/paciente/emergencias/283408">Emergências</Link></TableData>
              </TableLine>

              <TableLine>
                <TableData flexBasis="20%"><span>190.192.290-10</span></TableData>
                <TableData flexBasis="20%"><span>Paciente 283409</span></TableData>
                <TableData flexBasis="15%"><span>31</span></TableData>
                <TableData flexBasis="15%"><span>Masculino</span></TableData>
                <TableData flexBasis="30%"><Link to="/paciente/internacoes/283409">Internações</Link><span>|</span><Link to="/paciente/emergencias/283409">Emergências</Link></TableData>
              </TableLine>

                <strong>BUSCAR MAIS</strong>
            </TableContainer>
          </Side>

          <Side>
          <Content>
              <Card>
                <CardHeader>
                  <h1>Pacientes hospitalizados</h1>
                  <h3>O gráfico a seguir ilustra o número de pacientes hospitalizados no dia {format(new Date(), 'dd/MM/yyyy')}, distinguindo-os por tipo de hospitalização.</h3>
                </CardHeader>

                <HospitalizedPatients></HospitalizedPatients>
              </Card>
            </Content>

            <Content>
              <Card>
                <CardHeader>
                  <h1>Visão geral de pacientes</h1>
                  <h3>O gráfico a seguir ilustra atributos gerais dos pacientes hospitalizados no dia {format(new Date(), 'dd/MM/yyyy')}, como grau de escolaridade, indicador social e se possui convênio.</h3>
                </CardHeader>

                <PatientsOverview></PatientsOverview>
              </Card>
            </Content>
          </Side>
        </MainContainer>
      </div>
    </Container>
  );
}

export default Patients;