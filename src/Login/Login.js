import React from 'react';

import styled from 'styled-components';
import Button from '../Components/Button';
import Colors from '../Components/Colors';
import TextInput from '../Components/TextInput';

const Container = styled.div`
  height: 100vh;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient( to bottom, ${Colors.gray} 50%, black 50%);
  animation: fadeUp 0.7s;
  @media screen and (max-width: 768px){
    background: white;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 40%;
  max-width: 600px;
  height: 50%;
  border: 1px solid black;
  border-radius: 10px;
  opacity: 0;
  animation: fadeUp 0.7s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  @media screen and (max-width: 768px){
    width: 100vw;
    height: 100vh;
    max-width: 100vh;
    border: none;
    border-radius: 0px;
  }
`

const CardTop = styled.div`
  display: flex;
  margin: 0px;
  background: black;
  border-radius: 8px 8px 0px 0px;
  height: 80px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px){
    padding: 5px;
    border-radius: 0px;
    height: 60px;
  }
`
const CardTopImg = styled.img`
  width: 60%;
  @media screen and (max-width: 768px){
    width: 80vw;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .input {
    width: 70%;
    padding: 10px;
  }
  .button {
    width: 70%;
    margin: 10px 0px;
  }
  .forgot_pass {
    a {
      
    }
  }
`

const Login = () =>  {
  return (
    <Container>
      <Card>
        <CardTop className="card-top">
          <CardTopImg src="images/businesspal_logo.png" alt="" />
        </CardTop>
        <CardContent>
          <div className="input">
            <TextInput label="Email"/>
          </div>
          <div className="input">
            <TextInput label="Senha" type='password'/>
          </div>
          <div className="button">
            <Button caption="Entrar" color={Colors.green}/>
          </div>
          <div className="forgot_pass">
            <a href="">Esqueceu a senha?</a>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Login;