import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import {DataProvider} from './Context/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline /> 
      <DataProvider>
        <App />
      </DataProvider>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
