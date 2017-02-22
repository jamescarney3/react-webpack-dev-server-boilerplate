import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import React from 'react';
import { AppContainer } from './containers';

const containerEl = document.getElementById('container');

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <AppContainer />,
  containerEl,
);
