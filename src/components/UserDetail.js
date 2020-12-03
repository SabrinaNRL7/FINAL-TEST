import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Badge, Button, Card, Alert} from 'react-bootstrap'

const UserDetail = ({apiData}) => {
    const {id} = useParams()
    const detail = apiData.competitions.find(el => el.id == id)

    let details = [];

    details.push(["Season Start", detail.currentSeason.startDate])
    details.push(["Season End", detail.currentSeason.endDate])
    details.push(["Available Seasons", detail.numberOfAvailableSeasons])

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", height: window.innerHeight-55}}>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
                <div style={{width: "100%", flex: "4 0 1px", margin: '3rem'}}>
                    <div style={{display: 'flex', flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{flex: '0.125 0 1rem', display: "flex"}}>
                            <Button style={{margin: '0.37rem 0.5rem 0.37rem 0.5rem', backgroundColor: "#1E1E1E" , borderColor: "#434444"}}variant="primary" as={Link} to={`/`}>Back to Home</Button>
                        </div>
                        <div style={{flex: '1 0 1rem', padding: '0.37rem'}}>
                            <Card style={{height: '100%', backgroundColor: "#333536", color: "#FFF"}}>
                                <Card.Header></Card.Header>
                                <Card.Body style={{padding: "0"}}>
                                    <div style={{display: "flex", width: "100%", height: "100%"}}>

                                        <div style={{width: "100%", flex: "1 0 1rem", padding: "1rem", display: "flex", flexDirection: "column"}}>
                                            <div style={{height: "auto", marginBottom: "3rem"}}>
                                                <h5>{detail.name}</h5>
                                            </div>
                                            {
                                                details.map((el, idx) => 
                                                    el[1] !== null ?
                                                    <div style={{display: "flex", marginBottom: "2rem"}}>
                                                            <Alert key={idx} variant='success' style={{width: "50%", textAlign: "center", margin: "0.25rem"}}>
                                                               {el[0]}
                                                            </Alert>                                                        
                                                        
                                                            <Alert key={idx} variant='primary' style={{width: "100%", textAlign: "center", margin: "auto"}}>
                                                                {el[1]}
                                                            </Alert>
                                                    </div>
                                                    :
                                                    null
                                                )
                                            }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
            </div> 
        </div>
    )
}

export default UserDetail
