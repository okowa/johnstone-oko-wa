import React ,{Fragment}from "react";
//import { Container } from 'react-bootstrap'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import IntroPage from '../pages/IntroPage'



const HomePage = () => {
    return (
        <Fragment>

                <div className='page_dashboard'>
                    <IntroPage/>
                    <AboutPage/>
                    <ContactPage/>
                </div>

        </Fragment>
    )
}

export default HomePage