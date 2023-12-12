import React from 'react'
import Header from './Header'
import Skill from './Skill'
import Footer from './Footer'
import Contacts from './Contacts'
import Services from './Services'
import About from './About'
import Projects from './Projects'


function App() {
  return (
    <div className="flex flex-col justify-center items-center ">
              <Header />
              <About />
              <Skill />
              <Services />
              <Projects />
              <Contacts />
              <Footer /> 
    </div>
  )
}

export default App