import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary  id='abc' image='' name='' cost='' days={1} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image', () => {
    const expectedImg = 'image.jpg';
    const expectedAltImg = 'altImage';
    const component = shallow(<TripSummary  image={expectedImg} name={expectedAltImg} id='' cost='' days={1}/>);

    const renderImg = component.find('img');
    expect(renderImg.prop('src')).toEqual(expectedImg);
    expect(renderImg.prop('alt')).toEqual(expectedAltImg);
  });

  it('should render proper props: name, cost and days', () => {
    const expectName = 'nameTest';
    const expectCost = '12.00$';
    const expectDays = 2;
    const component = shallow(<TripSummary name={expectName} cost={expectCost} days={expectDays} id='' image='' />);

    expect(component.find('.title').text()).toEqual(expectName);
    expect(component.find('.details').text()).toEqual(`${expectDays} daysfrom ${expectCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct tags', () => {
    const expectedTags = ['tag1','tag2','tag3'];
    const component = shallow(<TripSummary tags={expectedTags} id='' image='' name='' cost='' days={1} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render tags section', () => {
    expect(shallow(<TripSummary tags={[]} id='' image='' name='' cost='' days={1}/>).hasClass('tags')).toBe(false);
    expect(shallow(<TripSummary id='' image='' name='' cost='' days={1}/>).hasClass('tags')).toBe(false);
  });
});
