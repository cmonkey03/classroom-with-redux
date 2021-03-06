// Example from https://redux.js.org/basics/reducers
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//       case SET_VISIBILITY_FILTER:
//         return Object.assign({}, state, {
//           visibilityFilter: action.filter
//         })
//       default:
//         return state
//     }
// }

// store.data = { // data is just an example name
//     students:[] // <-- this part of the state will be generated by the reducer below
// }
import {LOAD_DATA_API} from './../actions'
const initialState = []//phone a friend

const studentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_API:
          return action.payload.students
        default:
          return state
      }
}

export default studentsReducer