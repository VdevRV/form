import './App.css'
 import {
  BrowserRouter,
   Link,
   Switch,
   Route
 } from "react-router-dom";

import Login from './login'
import Home from './home'

function App()
{
  return(
    <div className="App">
      <BrowserRouter>
      <div>
            <Link to="/ronaldo">SUBMIT</Link>
            <br></br>
            <Link to="/messi">VIEW</Link>
      </div>
      <Switch>
        <Route path="/ronaldo"><Login /></Route>
        <Route path="/messi"><Home /></Route>
      </Switch>
      

      </BrowserRouter>
    </div>
  )
}

export default App;