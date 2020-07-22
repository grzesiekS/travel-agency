import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () =>{
    const component = shallow(<OrderOption name='test' type='date' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title name', () => {
    const expectedName = 'test';
    const component = shallow(<OrderOption name={expectedName} type='date' />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});
