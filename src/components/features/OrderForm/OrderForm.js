import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

import {Row, Col} from 'react-flexbox-grid';

import { withAlert } from 'react-alert';

const defaultOptions = {
  name: '',
  contact: '',
  ['start-date']: '',
};

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };
  if(options.contact  && options.name  && options['start-date']) {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });

    return true;
  } else {
    return false;
  }
};

const changeOptions = (setOrderOption, alertReact, {...otherOptions}) => {
  console.log(otherOptions);
  setOrderOption(otherOptions);
  alertReact.success('success!');
};

class OrderForm extends React.Component {

  render() {
    const {tripCost, options, setOrderOption, tripDuration, tripDetails} = this.props;
    const alertReact = this.props.alert;
    return (
      <Row>
        {pricing.map(opt => (
          <Col md={4} key={opt.id}>
            <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} tripDuration={tripDuration}/>
        </Col>
        <Button onClick={() => sendOrder(options, tripCost, tripDetails) ? changeOptions(setOrderOption, alertReact, defaultOptions) : alertReact.error('Name, Contact and Date are required!')}>Order now!</Button>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDuration: PropTypes.number,
  tripDetails: PropTypes.object,
  alert: PropTypes.object,
};

export default withAlert()(OrderForm);
