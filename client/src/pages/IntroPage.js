import React,{ Fragment } from 'react'
import {Card} from 'react-bootstrap'
import Typed from 'react-typed';

const IntroPage = () => {
    return (

        <Fragment>
            <div className='intro__wrapper'>
                <Typed
                    className='typed-text mt-1 '
                    strings={["Web Development", "React", "React-Hooks", "React-Redux","React-Bootstrap","Node", "MongoDB"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop/>
            </div>
            <div>
                <Card className='intro__page__card'>
                    <Card.Body>
                        <Card.Text>
                            Hi, I am Johnstone Wafula Okoth
                            I am a self taught Web Developer for 2 years..I deal with the MERN stack.
                            I have a couple of projects I made check the PROJECTS tab
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>


    );
};

export default IntroPage