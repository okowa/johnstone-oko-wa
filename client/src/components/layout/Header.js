import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import johnny from './johnny.jpg';

const Header = () => {

    return (
        <header>
            <Navbar className="navbar" bg='dark fixed-top' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <div className="profile" >
                        <img src={johnny} alt=""/>
                    </div>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>

                            <LinkContainer to='/'>
                                <Nav.Link>
                                    Home
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/about'>
                                <Nav.Link>
                                    About
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contacts'>
                                <Nav.Link>
                                    Contacts
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/projects'>
                                <Nav.Link>
                                    Projects
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/services'>
                                <Nav.Link>
                                   Services
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header