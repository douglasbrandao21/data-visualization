import { Switch } from 'react-router-dom';

import CustomRoute from './Route';

import Dashboard from '../pages/Dashboard';
import PatientOverviewHospitalization from '../pages/PatientOverview/Hospitalizations';
import PatientOverviewEmergencies from '../pages/PatientOverview/Emergencies';
import Patients from '../pages/Patients';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />
      <CustomRoute path="/signup" exact component={SignUp} />
      <CustomRoute path="/home" exact component={Dashboard} />
      <CustomRoute path="/pacientes" exact component={Patients} />
      <CustomRoute path="/paciente/internacoes/:id" exact component={PatientOverviewHospitalization} />
      <CustomRoute path="/paciente/emergencias/:id" exact component={PatientOverviewEmergencies} />
    </Switch>
  );
}

export default Routes;