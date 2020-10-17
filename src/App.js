import React from 'react';
import './App.css';
import routes from './routes'
import Homepage from './Components/Homepage'
import {Switch,Route,Link} from 'react-router-dom';
import Navbarcustom from './Components/Navbarcustom';
import ViewData from  './Components/ViewData';

function App() {
  return (
    <div>
      <Navbarcustom/>
      <Switch>
      <Route path={routes.viewData}><ViewData/></Route>
      <Route path={routes.home}><Homepage/></Route>
    </Switch>
    </div>
  );
}

export default App;
