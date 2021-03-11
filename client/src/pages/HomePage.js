import React ,{Fragment}from "react";
import IntroPage from '../pages/IntroPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'




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