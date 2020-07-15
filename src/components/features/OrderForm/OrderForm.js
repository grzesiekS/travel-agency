import React from 'react';

import OrderSummary from '../OrderSummary/OrderSummary';
import PageTitle from '../../common/PageTitle/PageTitle';

import {Row, Col, Grid} from 'react-flexbox-grid';


class OrderForm extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
