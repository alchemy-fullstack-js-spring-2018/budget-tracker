import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


