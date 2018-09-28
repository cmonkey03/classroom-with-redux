import React, { Component, Fragment } from 'react';
import './App.css';
import ApiAdapter from './adapter'
import Students from './students'
import Modules from './modules'
import Registrations from './registrations'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      students:[],
      modules:[],
      registrations:[]
    }
    
    this.apiAdapter = new ApiAdapter() 
  }

  componentDidMount() {
    this.apiAdapter.getApiData().then(initialAppState=>{
      this.setState({
        students: initialAppState[0],
        modules: initialAppState[1],
        registrations: initialAppState[2]
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Students students={this.state.students} />
        <Modules modules={this.state.modules} />
        <Registrations {...this.state} />
      </Fragment>
    );
  }
}

export default App;
