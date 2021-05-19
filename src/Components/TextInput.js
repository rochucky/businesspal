import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 2.2rem;
  font-family: Montserrat-Black;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background: #F8F8F8;
  font-size: 2rem;
  padding: 5px;
  outline: none;
  font-family: Montserrat-Light;

  &:focus {
    border-bottom: 2px solid black;
  }
`

const TextInput = (props) => {

  return (
    <InputContainer>
      <Label className="noselect">{props.label}</Label>
      <Input type={props.type || 'text'}/>
    </InputContainer>
  )
}

export default TextInput;