import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import { formatDate } from '../../../utils/formatDate';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderSummary = props => {
  return (
    <div>
      <h2 className={styles.component}>
      Total: <strong>{formatPrice(calculateTotal(formatPrice(props.tripCost), props.options))}</strong>
      </h2>
      {generateDuration(props.options['start-date'], props.tripDuration)}
    </div>
  );
};

const generateDuration = (date, duration) => {
  if(date != '') {
    return (
      <Grid>
        <Row>
          <Col md={2}>
            <h2>From:</h2>
            <h2>{formatDate(date)}</h2>
          </Col>
          <Col md={2}>
            <h2>To:</h2>
            <h2>{formatDate(date.setDate(date.getDate() + duration - 1))}</h2>
            {returnToSelectedDate(date, duration)}
          </Col>
        </Row>
      </Grid>
    );
  }
};

const returnToSelectedDate = (date, duration) => {
  date.setDate(date.getDate() - duration + 1);
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDuration: PropTypes.number,
};

export default OrderSummary;
