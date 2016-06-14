import { combineReducers } from 'redux'
import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from '../actions/index'

const rootReducer = combineReducers({
  projects
})

function projects (state = { isFetching: false, projects: [] }, action) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        projects: action.json
      })
    default:
      return state
  }
}

export default rootReducer
