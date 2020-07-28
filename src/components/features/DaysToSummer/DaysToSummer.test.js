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

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDescription = component.find(select.vacationCountDesc).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-05-01','51 days to summer');
  checkDescriptionAtDate('2020-06-20','1 day to summer');
  checkDescriptionAtDate('2020-09-24','270 days to summer');
});


