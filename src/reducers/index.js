import { combineReducers } from 'redux'
import students from './studentsReducer'

export default combineReducers({
    students
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
