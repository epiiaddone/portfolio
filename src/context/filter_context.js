import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PROJECTS,
  UPDATE_FILTERS,
  FILTER_PROJECTS,
  CLEAR_FILTERS,
} from '../actions'

import { useProjectsContext } from './projects_context'

const initialState = {
  filtered_projects: [],
  all_projects: [],
  filters: {
    context: false,
    redux: false,
    reactRouter: false,
    typeScript: false,
    reactQuery: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { projects } = useProjectsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PROJECTS, payload: projects })
  }, [projects])

  useEffect(() => {
    dispatch({ type: FILTER_PROJECTS })
  }, [state.filters])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.checked
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
