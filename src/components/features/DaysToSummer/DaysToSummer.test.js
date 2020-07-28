import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  vacationCountDesc: '.vacationCountDesc',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });

  it('should render vacationCountDesc element', () => {
    const component = shallow(<DaysToSummer />);

    expect(component.exists(select.vacationCountDesc)).toEqual(true);
  });
});


