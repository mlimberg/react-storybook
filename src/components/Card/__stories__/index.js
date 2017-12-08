import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../index.js';

const idea = {
  title: 'Fake Title',
  body: 'once upon a time, I figured out react storybook!',
  id: 123456789
}

storiesOf('Card', module)
  .add('idea card', () => (
    <Card { ...idea }/>
  ));
