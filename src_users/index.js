import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { router } from "./router.js";
import { I18nextProvider } from 'react-i18next';
import getI18n from './i18n';

// render the main component
ReactDOM.render(
  <I18nextProvider i18n={getI18n(store.getState().lang.lang)}>
    <Provider store={store}>
      {router}
    </Provider>
  </I18nextProvider>,
  document.getElementById('app')
);
