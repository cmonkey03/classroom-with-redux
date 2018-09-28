import { combineReducers } from 'redux'
import students from './studentsReducer'
import modules from './modulesReducers'
import registrations from './registrationsReducers'

export default combineReducers({
    students,
    registrations,
    modules
})

// Example code from https://redux.js.org/api/combinereducers
// import { combineReducers } from 'redux'
// import todos from './todos'
// import counter from './counter'
// ​
// export default combineReducers({
//   todos,
//   counter
// })
