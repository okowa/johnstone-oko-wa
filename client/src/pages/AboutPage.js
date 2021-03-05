import React from 'react'
import { Container } from 'react-bootstrap'
import johnny from '../components/layout/johnny.jpg';

const About = () => {
    return (
        <footer>
            <Container>

                <div className='page_dashboard'>
                    <div className="johnny">
                        <img src={johnny} alt=""/>
                    </div>
                    <p>
                        Hello! I am Johnstone Wafula Okoth.I am a self taught  Web Developer.I have been developing
                        for almost 2 years now .I' m a Full-Stack Web Developer.Technologies I use are the MERN Stack.
                        My journey as a Web Developer started in 2019 with Technologies as HTML,CSS and JAVASCRIPT.
                        Later I went into REACT,REDUX,HOOKS and NODE.I have a couple of projects some finished and some
                        still on the way.You can check them in the Project section.
                    </p>
                    <p>
                        I came to Germany on the 18th of December 2018 with a family reunion Visa.My wife is
                        a German and works as a High School Biology Teacher,I have a Child, a boy and with my
                        family wre live in Wassenberg.
                    </p>
                    <p>
                        In the 3 years I have been in Germany I have accomplished the following
                        <ul>
                            <li>
                                Taking care of my Boy until he is now 2 years old now as I was a stay home father.
                            </li>
                            <li>
                                Did my German Language and now I have a certificate of B1
                            </li>
                            <li>
                                Taught myself how to build websites
                            </li>
                            <li>
                                Learnt how to drive and now  I have a driving Licence
                            </li>
                        </ul>
                    </p>
                    <p>
                        At my free time I
                        <ol>
                            <li>workout</li>
                            <li>read</li>
                        </ol>
                    </p>
                    <p>
                        I know It's not easy to trust your institution with a wed developer who has no ausbildung
                        or any training from any institution,but what i have is resilience and hardwork.
                        I am a person who likes learning new things everyday and with constant changes in the world of
                        web development,that suits me better.
                    </p>
                </div>

            </Container>
        </footer>
    )
}

export default About