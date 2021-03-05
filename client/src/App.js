import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import HomePage from "./pages/HomePage";
import IntroPage from './pages/IntroPage'
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/Services";
import Footer from './components/layout/Footer'


const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>

                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/intro' component={IntroPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/contacts' component={ContactPage}/>
                    <Route exact path='/projects' component={ProjectsPage}/>
                    <Route exact path='/services' component={Services}/>

            </main>
            <Footer/>
        </Router>

    )
}

export default App

