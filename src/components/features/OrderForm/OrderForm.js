import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {

  render() {
    const {tripCost, options, setOrderOption, tripDuration} = this.props;
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
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDuration: PropTypes.number,
};

export default OrderForm;
