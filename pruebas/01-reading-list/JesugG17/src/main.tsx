import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

import './styles/index.css';
import { FilterProvider } from './context/FilterProvider';
import { ModalProvider } from './context/ModalProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </FilterProvider>
  </React.StrictMode>,
)