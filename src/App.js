import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MDBMask, MDBView } from "mdbreact";
import Button from 'react-bootstrap/Button';

import JMLogo from './images/JMLogo.png';

import PrideLogo from './images/PrideLogo2.jpg';
import StanLeeLogo from './images/StanLeeLogo5.jpg';
import HSNLogo from './images/HSNLogo2.jpg';
import SwaggerLogo from './images/SwaggerLogo2.jpg';
import AwardsLogo from './images/AwardsLogo2.jpg';
import ComicConLogo from './images/ComicConLogo6.jpg';

import DisneyLogo from './logos/DisneyLogo.png';
import ChateauLogo from './logos/ChateauLogo.png';
import ProjectAngelLogo from './logos/ProjectAngel.jpg';
import ShowtimeLogo from './logos/ShowtimeLogo.png';
import GoodwillLogo from './logos/GoodwillLogo.jpg';
import IdemitsuLogo from "./logos/IdemitsuLogo.png";
import LAHCLogo from './logos/LAHCLogo.jpg';
import RedCrossLogo from './logos/RedCrossLogo.jpg';
import TelscapeLogo from './logos/TelscapeLogo2.png';
import YMCALogo from './logos/YMCALogo.png';
import CrunchLogo from './logos/CrunchLogo2.png';
import OMagLogo from './logos/OMagLogo2.png';
import BETLogo from './logos/BETLogo.png';
import EJLogo from './logos/EJLogo.png';
import PoscaLogo from './logos/PoscaLogo.jpg';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import UnitedMedical from './projects/UnitedMedical';
import StanLee from './projects/StanLee';
import HomeShopping from './projects/HomeShopping';
import Swagger from './projects/Swagger';
import Awards from './projects/Awards';
import ComicCon from './projects/ComicCon';



function App() {
  return (
    <div className="App">
    <Router>
    <Navigation/>
    <Switch>
      <Route exact path="/"> <Experience/> </Route>
      <Route path="/aboutme"> <AboutMe/> </Route>
      <Route path="/contactme"> <ContactMe/> </Route>
      <Route path="/pride"> <UnitedMedical/> </Route>
      <Route path="/stanlee"> <StanLee/> </Route>
      <Route path="/homeshoppingnetwork"> <HomeShopping/> </Route>
      <Route path="/swagger"> <Swagger/> </Route>
      <Route path="/awardshows"> <Awards/> </Route>
      <Route path="/comiccon"> <ComicCon/> </Route>
    </Switch>
  </Router>
    </div>
  );
}

function Navigation(){
  return (
    <div className="navigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <img
            src={JMLogo}
            alt=""
            style={{maxWidth:"30%", paddingRight:"5%"}}
          />
          <LinkContainer to="/"><Nav.Link>Experience</Nav.Link></LinkContainer>
          <LinkContainer to="/aboutme"><Nav.Link>About Me</Nav.Link></LinkContainer>
          <LinkContainer to="/contactme"><Nav.Link>Contact</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

function Experience(){
  return (
    <div>
    <h2 style={{marginTop: "25%"}}> Site construction delayed due to Covid-19. Coming soon!</h2>
    </div>
  )
}

export default App;
