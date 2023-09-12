
import './App.css';
import styled,{ThemeProvider} from 'styled-components'
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import HeroSection from './components/HeroSection';
import Experiences from './components/Experiences'
import { BrowserRouter as Router } from 'react-router-dom';
import Education from './components/Education';
import Project from './components/Project';
import { useState } from 'react';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer'


const Body =styled.div`
background-color:${({theme})=>theme.bg};
width:100%;
overflow-x:hidden;
height:100%;

`

const Wrapper=styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body> 
       <Wrapper>
       <HeroSection/>
       <Skills/>
       <Experiences/>
       <Education/>
       <Project openModal={openModal} setOpenModal={setOpenModal} />
       {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          
          <Footer/>
       </Wrapper>
      
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
