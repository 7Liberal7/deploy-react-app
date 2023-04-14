import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App'

import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools())

const rootEl = document.querySelector("#root")
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)