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
                    <h3>About Me</h3>
                    <p>
                        Hallo! Ich bin Johnstone Wafula Okoth. Ich bin ein autodidaktischer Webentwickler. Ich habe geübt
                        Webentwicklung seit fast 2 Jahren mit dem MERN Stack.
                        Meine Reise als Webentwickler begann 2019 mit Technologien wie HTML, CSS und JAVASCRIPT.
                        Später ging ich zu REACT, REDUX, HOOKS und NODE.Ich habe einige Projekte abgeschlossen, einige abgeschlossen und einige
                        Sie können sie im Abschnitt Projekte überprüfen.
                    </p>

                    <p>
                        Ich weiß, es ist nicht einfach, Ihrer Institution einen Eheentwickler anzuvertrauen, der keine Ausbildung hat
                        oder irgendeine Ausbildung von irgendeiner Institution, aber glauben Sie mir, ich habe wirklich ohne Glück gesucht
                        Aber deshalb bin ich mit der Zeit gekommen, um selbst zu lernen. Was ich habe, ist Belastbarkeit und harte Arbeit.
                        Ich bin eine Person, die gerne jeden Tag neue Dinge lernt und sich ständig in der Welt von verändert
                        Webentwicklung, das passt mir besser.
                    </p>
                </div>

            </Container>
        </footer>
    )
}

export default About