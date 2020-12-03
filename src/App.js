import React, {useState, useEffect} from 'react';
import HomePage from './components/HomePage.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import UserDetail from './components/UserDetail.js'
import AboutPage from './components/AboutPage.js';

function App() {
  const [apiData, setApiData] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://api.football-data.org/v2/competitions")
      .then(resp => resp.json())
      .then(data => {
        setApiData(data)
        setIsLoading(false)
      })
  }, [])

  if(isLoading) {
    return (
      <div style={{height: window.innerHeight, width: "100%", paddingTop: "1rem",backgroundColor: "#111111", color: "#FFF"}}>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <Router>
        <NavBar/>
        <div style={{backgroundColor: "#111111"}}>
          <Switch>
            <Route exact path="/">
              <HomePage apiData={apiData}/>
            </Route>
            <Route exact path="/userDetail/:id" children={
              <UserDetail apiData={apiData}/>
            }/>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
