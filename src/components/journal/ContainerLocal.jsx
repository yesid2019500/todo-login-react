import React from 'react'
import MapView from '../localizacion/MapView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LocalHome from '../localizacion/LocalHome'

export const ContainerLocal = () => {
  return (
   <div className="nothing__main-content">

<Router>
      <Switch>
        <Route path="/map">
          <MapView />
        </Route>
        <Route path="/">
        <LocalHome/>
        </Route>
      </Switch>
    </Router>

     
   </div>
  )
}
