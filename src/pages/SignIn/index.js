//import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import { Container, InputContainer, TitleContainer } from './styles';

function SignIn() {
  const [data, setData] = useState({});

  const history = useHistory();

  async function handleSubmit() {
    try {
      // const response = await axios.post('http://localhost:3333/sessions', {
      //   ...data
      // });

      // const { user, token } = response.data;

      // localStorage.setItem("user", {
      //   user,
      //   token
      // });

      history.push('dashboard');
    }
    catch(error) {
      const errorMessage = error.response.data[0];

      const message = errorMessage.validation ? 
        errorMessage.message : 'Credenciais inválidas';

      toast(message, {
        position: 'bottom-center'
      });
    }
  }

  function handleOnChange(event) {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Ambiente de visualização</h1>
        <span>Visualize informações importantes do hospital.</span>
      </TitleContainer>

      <InputContainer>
        <FormInput name="email" icon="mail" placeholder="E-mail" onChange={handleOnChange} />
        <FormInput name="password" icon="lock" placeholder="Password" type="password" onChange={handleOnChange} />
      
        <Button onClick={handleSubmit}>ENTRAR</Button>
      </InputContainer>
      
    </Container>
  );
}

export default SignIn;