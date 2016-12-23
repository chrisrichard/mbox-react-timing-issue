import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './components/App';
import { Provider } from 'mobx-react'

const appState = new AppState();

render(
  <AppContainer>
    <Provider appState={appState}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    render(
      <AppContainer>
        <Provider appState={appState}>
          <NextApp appState={appState} />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
