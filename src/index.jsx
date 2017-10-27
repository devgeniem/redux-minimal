import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { router } from './router.js';
import getI18n from './i18n';


// render the main component
const langState = store.getState().get('lang');

ReactDOM.render(
  <I18nextProvider i18n={getI18n(langState.lang)}>
    <Provider store={store}>
      {router}
    </Provider>,
  </I18nextProvider>,
  document.getElementById('app'),
);
