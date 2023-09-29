import React from 'react'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {
  const {
    filters: {
      context,
      redux,
      reactRouter,
      typeScript,
      reactQuery,
    },
    updateFilters,
    clearFilters,
  } = useFilterContext()

  return (
    <div className='filters'>
      <form onSubmit={(e) => e.preventDefault()} className='filters__form'>
        <div className='form-control'>
          <input
            type='checkbox'
            name='context'
            id='context'
            checked={context}
            onChange={updateFilters}
          />
          <label htmlFor='context'>Context</label>
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            name='redux'
            id='redux'
            checked={redux}
            onChange={updateFilters}
          />
          <label htmlFor='redux'>Redux</label>
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            name='reactRouter'
            id='reactRouter'
            checked={reactRouter}
            onChange={updateFilters}
          />
          <label htmlFor='reactRouter'>React Router</label>
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            name='reactQuery'
            id='reactQuery'
            checked={reactQuery}
            onChange={updateFilters}
          />
          <label htmlFor='reactQuery'>React Query</label>
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            name='typeScript'
            id='typeScript'
            checked={typeScript}
            onChange={updateFilters}
          />
          <label htmlFor='typeScript'>TypeScript</label>
        </div>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </form>

    </div>
  )
}


export default Filters
