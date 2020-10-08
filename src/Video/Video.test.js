  
import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><Video /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});