import React from 'react';
import { storiesOf } from '@storybook/react';
import TextContainer from '../index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

const ToDos = [
  {
    title: 'Fake',
    body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    id: 1234
  },
  {
    title: 'Fake 2',
    body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    id: 2345
  }
]

const store = createStore(rootReducer, { ToDos });

storiesOf('TextContainer', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      {getStory()}
    </Provider>
  ))
  .add('TextContainer', () => (
      <TextContainer />
  ));
