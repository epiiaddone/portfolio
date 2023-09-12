import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/projects_reducer';
import { getProjects } from '../utils/getProjects';

import {
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from '../actions';


const initialState = {
  projects_loading: false,
  projects_error: false,
  projects: [],
}

const ProjectsContext = React.createContext()

export const ProjectsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProjects = async () => {
    dispatch({ type: GET_PROJECTS_BEGIN })

    const {error, projects_data} = await getProjects();

    if(!error)dispatch({ type: GET_PROJECTS_SUCCESS, payload: projects_data })
    else dispatch({ type: GET_PROJECTS_ERROR })

  }


  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <ProjectsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
// make sure use
export const useProjectsContext = () => {
  return useContext(ProjectsContext)
}
