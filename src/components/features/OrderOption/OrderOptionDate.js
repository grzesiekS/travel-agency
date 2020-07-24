import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
  tomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  state = {
    startDate: '',
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  render() {
    return (
      <DatePicker
        // eslint-disable-next-line react/prop-types
        selected={this.props.currentValue}
        onChange={this.handleChange}
        minDate={this.tomorrowDate()}
        className={styles.input}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
