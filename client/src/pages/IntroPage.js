import React from 'react'
import {Card, Container} from 'react-bootstrap'
import Typed from 'react-typed';

const IntroPage = () => {
    return (

        <Container>
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
                            I have a couple of projects I made with the below Software
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </Container>

    );
};

export default IntroPage