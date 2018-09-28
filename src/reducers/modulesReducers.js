import {LOAD_DATA_API} from './../actions'
const initialState = []//phone a friend

const modulesReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_API: // Bad practice
          return action.payload.modules
        default:
          return state
      }
}

export default modulesReducer