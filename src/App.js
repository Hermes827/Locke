import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoonPhase from './components/moonPhase.js'
import WelcomePage from './components/welcomePage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



class App extends React.Component {

    render(){
      return(
    <div className="App">
    <MoonPhase/>
    <WelcomePage/>
    <Button variant="primary">Click Here</Button>
    </div>
  );
}
}

export default App;
