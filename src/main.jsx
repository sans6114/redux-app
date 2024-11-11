import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { PokemonApp } from './PokemonApp.jsx';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </StrictMode>,
)
