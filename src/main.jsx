import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './templates/Home';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
