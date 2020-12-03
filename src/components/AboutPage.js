import React from 'react'
import {Jumbotron} from 'react-bootstrap'


const AboutPage = () => {
    return (
        <div style={{ height: window.innerHeight, width: "100%", paddingTop: "1rem"}} >
            <Jumbotron style={{margin: "auto", width: "30rem"}}>
                <h1>Hello Football Lovers!</h1>
                <p>
                    This is the web about football list matches.
                </p>
            </Jumbotron>
        </div>
    )
}

export default AboutPage
