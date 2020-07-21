import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary  id='abc' tags={[]}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image', () => {
    const expectedImg = 'image.jpg';
    const expectedAltImg = 'altImage';
    const component = shallow(<TripSummary  image={expectedImg} name={expectedAltImg} tags={[]}/>);

    const renderImg = component.find('img');
    expect(renderImg.prop('src')).toEqual(expectedImg);
    expect(renderImg.prop('alt')).toEqual(expectedAltImg);
  });

  it('should render proper props: name, cost and days', () => {
    const expectName = 'nameTest';
    const expectCost = '12.00$';
    const expectDays = 2;
    const component = shallow(<TripSummary name={expectName} cost={expectCost} days={expectDays} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectName);
    expect(component.find('.details').text()).toEqual(`${expectDays} daysfrom ${expectCost}`);
  });
});
