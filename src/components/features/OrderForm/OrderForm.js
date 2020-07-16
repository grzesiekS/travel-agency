import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {

  render() {
    const {tripCost, options} = this.props;
    return (
      <Row>
        {pricing.map(opt => (
          <Col md={4} key={opt.id}>
            <OrderOption {...opt}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
