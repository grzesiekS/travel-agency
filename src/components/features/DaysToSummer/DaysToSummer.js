import React from 'react';

import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownDays() {
    const currentDate = new Date();
    const nextVacation = new Date(Date.UTC(currentDate.getUTCFullYear(),5,21,10));
    if(currentDate > nextVacation) {
      nextVacation.setUTCFullYear(currentDate.getUTCFullYear() + 1);
    }
    const diffDays = Math.round((nextVacation.getTime() - currentDate.getTime())/(1000 * 3600 * 24));

    return diffDays;
  }

  createDesc(diffDays) {
    return diffDays === 1 ? `${diffDays} day to summer` : `${diffDays} days to summer`;
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.vacationCountDesc}>
          {this.getCountdownDays() < 271 ? this.createDesc(this.getCountdownDays()) : null}
        </h3>
      </div>
    );
  }
}

export default DaysToSummer;
