import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MDBMask, MDBView } from "mdbreact";
import Button from 'react-bootstrap/Button';

import JMLogo from './images/JMLogo.png';

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
      <div className="ExperiencePage1">
        <div className="firstRowHOME">
          <div className="firstRowTitleHOME">Comic-Con and Stan Lee</div>
          <LinkContainer to="/comiccon"><Button variant="link">View the Project</Button></LinkContainer>
        </div>

        <div className="secondRowHOME">
          <div className="firstRowTitleHOME">Swagger Magazine</div>
          <LinkContainer to="/swagger"><Button variant="link">View the Project</Button></LinkContainer>
        </div>
        <div className="thirdRowHOME">
          <div className="firstRowTitleHOME">Pride Condoms Campaign</div>
          <LinkContainer to="/pride"><Button variant="link">View the Project</Button></LinkContainer>
        </div>
        <div className="fourthRowHOME">
          <div className="firstRowTitleHOME">Home Shopping Network</div>
          <LinkContainer to="/homeshoppingnetwork"><Button variant="link">View the Project</Button></LinkContainer>
        </div>
        <div className="fifthRowHOME">
          <div className="firstRowTitleHOME">Awards Shows</div>
          <LinkContainer to="/awardshows"><Button variant="link">View the Project</Button></LinkContainer>
        </div>

      </div>
      <div className="ExperiencePage2">
      <h1 className="clientsTitle"> Additional Clients...</h1>
        <div className="firstRow-2">
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={DisneyLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={ShowtimeLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={ProjectAngelLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={BETLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={LAHCLogo} alt=""/>
        </MDBView>
        </div>
        <div className="firstRow-2">
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={IdemitsuLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={YMCALogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={RedCrossLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={TelscapeLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={OMagLogo} alt=""/>
        </MDBView>
        </div>
        <div className="firstRow-2">
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={ChateauLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={EJLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={GoodwillLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={CrunchLogo} alt=""/>
        </MDBView>
        <MDBView className="tile-2" hover zoom>
          <img className="img-fluid" src={PoscaLogo} alt=""/>
        </MDBView>
        </div>
      </div>
      <footer className="footer">
        <h5>jamesmaclean@mac.com</h5>
        <h14>&copy; {new Date().getFullYear()} Designed By <a href="https://www.kthaisgonzalez.com"> Thais Gonzalez </a></h14>
        <p></p>
      </footer>
    </div>
  )
}

export default App;
