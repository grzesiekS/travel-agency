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
    startDate: this.tomorrowDate(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  selectStartDate = date => {
    this.props.setOptionValue(date);
    return date;
  };

  render() {

    return (
      <DatePicker
        selected={this.state.startDate}
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
