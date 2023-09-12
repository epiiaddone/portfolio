import {
    GET_PROJECTS_BEGIN,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
  } from '../actions'
  
  const projects_reducer = (state, action) => {
  
    if (action.type === GET_PROJECTS_BEGIN) {
      return { ...state, projects_loading: true }
    }
    if (action.type === GET_PROJECTS_SUCCESS) {
      return {
        ...state,
        projects_loading: false,
        projects: action.payload,
      }
    }
    if (action.type === GET_PROJECTS_ERROR) {
      return { ...state, projects_loading: false, projects_error: true }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default projects_reducer
  