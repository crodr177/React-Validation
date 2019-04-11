import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Form from "./Form"
import Thankyou from "./Thankyou"

const App = (props) => (
  <Router>
    <div id="container">
      <Route exact path="/" component={Form}/>
      <Route exact path="/submitted" component={Thankyou}/>
    </div>
  </Router>
)

export default App;
