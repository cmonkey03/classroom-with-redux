import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux'
import './App.css';
import ApiAdapter from './adapter'
import Students from './students'
import Modules from './modules'
import Registrations from './registrations'
import store from './store'

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
      store.dispatch({
        type:'LOAD_STUDENTS_FROM_API',
        payload: initialAppState[0]
      })
      this.setState({
        //students: initialAppState[0],
        modules: initialAppState[1],
        registrations: initialAppState[2]
      })
    })
    // setTimeout( ()=>{
    //   console.log(store.getState())
    //   store.dispatch({
    //     type:'LOAD_STUDENTS_FROM_API',
    //     payload:['Vicky']
    //   })
    // },3000 )
    // setTimeout( ()=>{
    //   console.log(store.getState())
    // },5000 )
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Students />
          <Modules modules={this.state.modules} />
          <Registrations {...this.state} />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
