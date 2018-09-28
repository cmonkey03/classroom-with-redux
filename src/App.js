import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux'
import './App.css';
import ApiAdapter from './adapter'
import Students from './students'
import Modules from './modules'
import Registrations from './registrations'
import store from './store'
import {LOAD_DATA_API} from './actions'

class App extends Component {

  constructor(props) {
    super(props)
    this.apiAdapter = new ApiAdapter() 
  }

  componentDidMount() {
    this.apiAdapter.getApiData().then(initialAppState=>{
      const payload = {
        students:initialAppState[0],
        modules:initialAppState[1],
        registrations:initialAppState[2],
      }
      store.dispatch({
        type: LOAD_DATA_API,
        payload
      })
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Students />
          <Modules />
          <Registrations />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
