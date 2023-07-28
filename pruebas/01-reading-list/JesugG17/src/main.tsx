import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

import './styles/index.css';
import { FilterProvider } from './context/FilterProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
)