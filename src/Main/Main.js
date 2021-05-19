import React, { useEffect, useRef } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import styled from 'styled-components';
import {
  useHistory,
  useLocation,
  Link,
  Switch,
  Route
} from "react-router-dom";

import Colors from '../Components/Colors';
import {ReactComponent as UserLogo} from '../Components/icons/user-circle_1.svg';
import {ReactComponent as LightBulb} from '../Components/icons/bulb.svg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 10px;
  @media screen and (max-width: 1366px){
    font-size: 8px;
  }
  .main {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`

const Header = styled.div`
  display: flex;
  position: sticky;
  height: 5em;
  background-color: black;
  align-items: center;
  color: white;
  padding: 1em 0em;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    &.menu {
      justify-content: flex-start;
    }
    &.actions {
      justify-content: flex-end;
    }
    &.menu, 
    &.actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      img, svg {
        height: 5em;
        width: auto;
        padding: 2em 1.5em;
        cursor: pointer;
      }
    }
    &.logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      img{
        height: 6em;
        width: auto;
        padding: 4em;
        cursor: pointer;
      }
    }

  }

`

const Menu = styled.div`
  flex: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;
  width: fit-content;
  max-width: 8em;
  transition: all 0.5s ease-out;
  background: #F8F8F8;
  height: 100vh;
  z-index: 1;
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 2em;
    overflow: hidden;
    transition: all 0.3s ease-out;
    img, svg {
      height: 4em;
      width: 4em;
    }
    h1{
      font-family: Montserrat-Black;
      white-space: nowrap;
      font-size: 2em;
      margin-left: 2em;
    }
    &.selected {
      
      background: #555;
    }
  }
  &.expanded {
    max-width: 45em;
  }
`

const Content = styled.div`
  flex: 1;
  margin-left: 8em;
  overflow-y: scroll;
  .menuOverlay {
    position: absolute;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 0vw;
    height: 0vh;
    min-width: 0vw;
    min-height: 100vh;
    transition: all 0.5s ease-out;
    z-index: 0;
    &.expanded{
      min-width: 100vw;
      opacity: 1;
    }
  }
`

const Main = (props) => {

  const history = useHistory();
  const menuRef = useRef();
  const menuOverlayRef = useRef();

  useEffect(() => {
    console.log(window.location.pathname);
  }, [])

  const handleMenuClick = () => {
    menuRef.current.classList.toggle('expanded');
    menuOverlayRef.current.classList.toggle('expanded');
  }

  const handleTabClick = (evt) => {
    let children = menuRef.current.childNodes;
    [...children].map((item, index) => {
      item.classList.remove('selected');
    });

    evt.currentTarget.classList.add('selected');
    menuRef.current.classList.remove('expanded');
    menuOverlayRef.current.classList.remove('expanded');
    history.push(evt.currentTarget.dataset.page);
  }

  return (
    <Container>
      <Header>
        <div className="menu">
          <img onClick={handleMenuClick} src="images/icons/botao-de-menu.png" title="Expandir Menu" />
        </div>
        <div className="logo">
          <img src="images/businesspal_logo.png" alt="" />
        </div>
        <div className="actions">
          <img src="images/icons/sino.png" alt="" />
          <UserLogo fill="white" />
        </div>
      </Header>
      <div className="main">
        <Menu ref={menuRef} className="noselect">
          <div className="selected" data-page="/" onClick={handleTabClick}>
            <img src="images/icons/home.png" alt="" />
            <h1>Página Inicial</h1>
          </div>
          <div data-page="ideas" onClick={handleTabClick}>
            <img src="images/icons/bulb.svg" alt="" />
            <h1>Idéias de Negócios</h1>
          </div>
          <div data-page="projects" onClick={handleTabClick}>
            <img src="images/icons/layers.png" alt="" />
            <h1>Meus Projetos</h1>
          </div>
          <div data-page="reports" onClick={handleTabClick}>
            <img src="images/icons/report.png" alt="" />
            <h1>Relatórios</h1>
          </div>
          <div data-page="support" onClick={handleTabClick}>
          <img src="images/icons/information.png" alt="" />
            <h1>Suporte</h1>
          </div>
        </Menu>
        <Content>
          <div ref={menuOverlayRef} className="menuOverlay"></div>
          <Switch>
            <Route path="/" exact >
              <h1>home</h1>
            </Route>
            <Route path="/ideas" >
              <h1>ideas</h1>
            </Route>
            <Route path="/projects" >
              <h1>peojects</h1>
            </Route>
            <Route path="/reports" >
              <h1>reports</h1>
            </Route>
            <Route path="/support" >
              <h1>Support</h1>
            </Route>
          </Switch>
        </Content>
      </div>
    </Container>
  )
}

export default Main;