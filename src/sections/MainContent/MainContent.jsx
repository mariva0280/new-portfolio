//import React from "react"
import Home from '../Home/Home'
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
//import { Link } from 'react-router-dom'
import './MainContentStyles.modules.css'

function MainContent() {
    return (
        <>
            <section id="home" className="section">
                <Home />
            </section>
            <section id="skills" className="section">
                <Skills />
            </section>
            <section id="projects" className="section">
                <Projects />
            </section>
            <section id="contact" className="contact">
                <Contact />
            </section>
        </>
    )
}
export default MainContent