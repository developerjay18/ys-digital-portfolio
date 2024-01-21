import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home, PP, TNC } from './pages/index.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Apply from './components/Apply.jsx';
import ApplyForm from './components/ApplyForm.jsx';
import ThankYou from './ThankYou.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/terms-and-conditions" element={<TNC />} />
      <Route path="/privacy-policy" element={<PP />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/apply/form" element={<ApplyForm />} />
      <Route path="/apply/greeting" element={<ThankYou />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
