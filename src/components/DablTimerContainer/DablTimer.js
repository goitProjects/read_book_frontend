import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './DablTimer.module.css';
import Timer from '../Timer/Timer';

const DablTimer = ({ timeEnd }) => {
  const endDataTime = moment(timeEnd).format('ll');

  const endOfYear = moment(Date.now()).endOf('year')._d;

  return (
    <>
      {endDataTime !== null && (
        <div className={styles.timersWraper}>
          <Timer
            dateFin={endOfYear}
            nameTimer="До закінчення року залишилось"
            className={styles.timer}
          />
          <Timer
            dateFin={endDataTime}
            nameTimer="До досягнення мети залишилось"
            className={styles.timer}
          />
        </div>
      )}
    </>
  );
};

DablTimer.defaultProps = {
  timeEnd: '',
};

DablTimer.propTypes = {
  timeEnd: PropTypes.string,
};

export default DablTimer;
