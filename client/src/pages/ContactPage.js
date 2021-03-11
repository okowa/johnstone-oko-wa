import React from 'react'
import { Container } from 'react-bootstrap'

const ContactPage = () => {
    return (
        <footer>
            <Container>
                <div className='page_dashboard'>
                    <div className="contact">
                        <div className="container">
                            <div className="contactSection">
                                <div className="row justifyCenter">
                                    <div className="col-6">

                                        <h1>My contacts</h1>&nbsp;&nbsp;

                                        <div className='px-2'>
                                            <ul>
                                                <li>
                                                    <i className="fas fa-phone"></i> 015156860485
                                                </li>
                                                <li>
                                                    <a
                                                        className='gmail-icon-link gmail'
                                                        href="https://mail.google.com"
                                                        target='_blank'
                                                        rel="noopener"
                                                        aria-label='Gmail'>
                                                        <i className="far fa-envelope"></i> okoth.johnstone.wafula@gmail.com
                                                    </a>

                                                </li>
                                                <li>
                                                    <a
                                                        className='gmail-icon-link gmail'
                                                        href="https://mail.google.com"
                                                        target='_blank'
                                                        rel="noopener"
                                                        aria-label='Gmail'>
                                                        <i className="far fa-envelope"></i> the.okowa.group@gmail.com
                                                    </a>

                                                </li>
                                                <li>
                                                    <i className="far fa-envelope"></i> okowa@yahoo.com
                                                </li>

                                            </ul>
                                        </div>

                                        <ul className=" py-2 contactCircles">
                                            <li>
                                                <a
                                                    className='social-icon-link facebook'
                                                    href="https://facebook.com"
                                                    target='_blank'
                                                    rel="noopener"
                                                    aria-label='Facebook'>
                                                    <i className="fab fa-facebook-f fa-2x"/>
                                                </a>

                                            </li>
                                            <li>
                                                <a
                                                    className='social-icon-link twitter'
                                                    href="https://twitter.com"
                                                    target='_blank'
                                                    rel="noopener"
                                                    aria-label='Twitter'>
                                                    <i className="fab fa-twitter fa-2x"/>
                                                </a>

                                            </li>
                                            <li>
                                                <a
                                                    className='social-icon-link linkedin'
                                                    href="https://linkedin.com"
                                                    target='_blank'
                                                    rel="noopener"
                                                    aria-label='Linkedin'>
                                                    <i className="fab fa-linkedin-in fa-2x"/>
                                                </a>

                                            </li>
                                            <li>
                                                <a
                                                    className='social-icon-link instagram'
                                                    href="https://instagram.com/okowa.group"
                                                    target='_blank'
                                                    rel="noopener"
                                                    aria-label='Instagram'>
                                                    <i className="fab fa-instagram fa-2x"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </footer>
    )
}

export default ContactPage