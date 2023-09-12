import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProjectsProvider } from './context/projects_context';
import { FilterProvider } from './context/filter_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProjectsProvider>
  </React.StrictMode>
);
