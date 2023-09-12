import {
    LOAD_PROJECTS,
    UPDATE_FILTERS,
    FILTER_PROJECTS,
    CLEAR_FILTERS,
  } from '../actions'
  
  const filter_reducer = (state, action) => {

    if(action.type === LOAD_PROJECTS){
        return {...state, all_projects: action.payload, filtered_projects: action.payload}
    }

    if (action.type === UPDATE_FILTERS) {
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    }

    if (action.type === FILTER_PROJECTS) {
      const { all_projects } = state
      const { context, redux, reactRouter, typeScript } = state.filters
      let tempProjects = [...all_projects]

      if (context) {
        tempProjects = tempProjects.filter(
          (project) => project.context === true
        )
      }
      if (redux) {
        tempProjects = tempProjects.filter(
          (project) => project.redux === true
        )
      }
      if (reactRouter) {
        tempProjects = tempProjects.filter(
          (project) => project.reactRouter === true
        )
      }
      if (typeScript) {
        tempProjects = tempProjects.filter(
          (project) => project.typeScript === true
        )
      }

      return { ...state, filtered_projects: tempProjects }
    }
    if (action.type === CLEAR_FILTERS) {
      return {
        ...state,
        filters: {
          ...state.filters,
          context:false,
          redux:false,
          reactRouter:false,
          typeScript:false,
        },
      }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default filter_reducer
  