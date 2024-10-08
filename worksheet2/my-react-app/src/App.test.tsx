import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import exp from 'constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('knows that 2 and 2 makes 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Subtraction', () => {
  it('knows that 2 minus 2 makes 0', () => {
    expect(2 - 2).toBe(0);
  });
});
