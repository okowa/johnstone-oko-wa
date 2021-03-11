import React from 'react'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'



const ProjectsPage = () => {


    return (
            <Container>
                <h2>My Projects</h2>
                <div className='page_dashboard'>
                    <div className='project1'>
                        <ol>
                            <li>Wald Kindergarten Website</li>
                        </ol>&nbsp;&nbsp;
                        <p>Created with React and pimped it with simple CSS</p>&nbsp;&nbsp;
                        <p className='heroku__clicks'>
                            <a href={"https://waldkindergarten.netlify.app"}>
                                Click here to check in Netlify
                            </a>
                        </p>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/wald-kiga/wald-kinder-header.png")}
                                    alt=""

                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/wald-kiga/wald-kinder-body.png")}
                                    alt=""/>
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/wald-kiga/wald-kinder-footer.png")}
                                    alt=""/>
                                    <Carousel.Caption>
                                   </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>&nbsp;&nbsp;

                    <div className='project1'>
                        <ol>
                            <li>E-Commerce Website</li>
                        </ol>
                        <p>
                            This is a shop app where customers can view or order items displayed or
                            sold in this app.It has been created with the MERN stack
                        </p>
                        <p className='heroku__clicks'>
                            <a  href={"https://okowa-ecommerce.herokuapp.com"}>
                                Click here to check in Heroku
                            </a>
                        </p>

                        <Carousel>
                            <Carousel.Item>

                                <img
                                    src={(process.env.PUBLIC_URL + "/images/okowa-shop/sign-up.png")}
                                    alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img

                                    src={(process.env.PUBLIC_URL + "/images/okowa-shop/sign-in.png")}
                                    alt=""
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/okowa-shop/home-page.png")}
                                    alt=""
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/okowa-shop/detail-product.png")}
                                    alt=""
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/okowa-shop/shopping-cart.png")}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='my-5 project1'>
                        <ol>
                            <li>Multi Shops App</li>
                        </ol>
                        <p>
                            This is a full MERN project.A project of multiple shops and businesses where users can
                            sell products, create E-Shop,sell services and offer jobs.There is three admin sections
                            main admin section,shop admin section,and a service provider admin section.Here users
                            can also make posts and chat, review on quality of shops and services offered.Users can
                            also login or access their account using social media platform i.e Google or facebook
                            Its a big project so its not finished yet.
                        </p>
                        <p className='heroku__clicks'>
                            <a href={"https://okowa-business.herokuapp.com"}>
                                Click here to check in Heroku
                            </a>
                        </p>
                        <Carousel>
                            <Carousel.Item>

                                <img
                                    src={(process.env.PUBLIC_URL + "/images/shop-it/shopit-register.png")}
                                    alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={(process.env.PUBLIC_URL + "/images/shop-it/shopit-signin.png")}
                                    alt=""
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>

            </Container>

    );
};

export default ProjectsPage;