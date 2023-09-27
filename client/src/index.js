import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap app in provider so all components can use cart */}
    <Provider store={store}>
      <PersistGate loading={"Loading"} persistor={persistor} />
      <App />
    </Provider>
  </React.StrictMode>
);