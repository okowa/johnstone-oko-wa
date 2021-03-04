import { Container } from 'react-bootstrap'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import IntroPage from '../pages/IntroPage'
import React from "react";


const HomePage = () => {
    return (
        <footer>
            <Container>
                <div className='page_dashboard'>
                    <IntroPage/>
                    <AboutPage/>
                    <ContactPage/>
                </div>
            </Container>
        </footer>
    )
}

export default HomePage