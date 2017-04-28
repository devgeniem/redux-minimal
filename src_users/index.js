import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router } from "./router";
import { store } from "./store";
import { I18nextProvider } from 'react-i18next';
import getI18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={getI18n(store.getState().lang.lang)}>
    <Provider store={store}>
      {router}
    </Provider>
  </I18nextProvider>,
  document.getElementById('app'),
);
