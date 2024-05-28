
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const { StrictMode } = React;
const app = document.querySelector<HTMLDivElement>('#app')!;

ReactDOM.createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>
);
