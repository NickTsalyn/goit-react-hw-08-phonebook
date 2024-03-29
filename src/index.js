import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import global_en from './translations/en/global.json';
import global_ua from './translations/ua/global.json';
import global_he from './translations/he/global.json';
import global_ar from './translations/ar/global.json';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        global: global_en,
      },
      ua: {
        global: global_ua,
      },
      ar: {
        global: global_ar,
      },
      he: {
        global: global_he,
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
