import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

const store = createStore(rootReducer);

storiesOf('Header', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('header', () => (
      <Header />
  ));
