import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  width: 100%;
  border-radius: 50px;
  opacity: 1;
  transition: box-shadow 0.3s ease;
  h2 {
    font-family: Montserrat-Black;
    font-size: 2rem;
  }
  &:hover{
    box-shadow: 2px 2px 10px 0px;
  }
  &:active {
    box-shadow: 1px 1px 10px 0px;
    opacity: 0.8;
  }
`

const Button = (props) => {

  return (
    <Container color={props.color || '#0275d8'} className="noselect">
      <h2>{props.caption}</h2>
    </Container>
  )
}

export default Button;