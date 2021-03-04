import React from 'react'
import construction from '../components/layout/construction.gif'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <div className='page_dashboard'>
            <div className='under__construction'>
                <i className="far fa-exclamation-triangle fa-2x"></i> Work In Progress
                <p><img src={construction} alt="men at work..." /></p>
                <p>Sorry, this page is under construction</p>
            </div>

            </div>
        </Container>
    )
}

export default Home