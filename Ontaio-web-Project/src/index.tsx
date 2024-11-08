import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustLoader from 'components/CustLoader';

const App = React.lazy(()=> import('./App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Suspense fallback={<CustLoader />}>
    <App />
  </React.Suspense>
);
