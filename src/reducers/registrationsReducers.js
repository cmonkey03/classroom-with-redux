import {LOAD_DATA_API} from './../actions'
const initialState = []//phone a friend

const registrationsReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_API: // Bad practice
          return action.payload.registrations
        default:
          return state
      }
}

export default registrationsReducer