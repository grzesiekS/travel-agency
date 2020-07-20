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
  const dateCopy = new Date(Number(date));
  console.log(dateCopy);
  return (
    <Grid>
      <Row>
        <Col md={2}>
          <h2>From:</h2>
          {date != '' ? (<h2>{formatDate(date)}</h2>) : (<h2>-----</h2>)}
        </Col>
        <Col md={2}>
          <h2>To:</h2>
          {date != '' ?
            (<h2>{formatDate(dateCopy.setDate(dateCopy.getDate() + duration - 1))}</h2>)
            :
            (<h2>-----</h2>)}
        </Col>
      </Row>
    </Grid>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDuration: PropTypes.number,
};

export default OrderSummary;
