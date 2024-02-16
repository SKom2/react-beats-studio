import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import TimerIcon from '../../../../../assets/images/TimerIcon.svg';

const Timer = () => {
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let totalMilliseconds =
      (hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;

    const intervalId = setInterval(() => {
      totalMilliseconds -= 100;
      setHours(Math.floor(totalMilliseconds / 3600000));
      setMinutes(Math.floor((totalMilliseconds % 3600000) / 60000));
      setSeconds(Math.floor((totalMilliseconds % 60000) / 1000));
      setMilliseconds(totalMilliseconds % 1000);

      if (totalMilliseconds <= 0) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [hours, milliseconds, minutes, seconds]);

  const formattedMilliseconds = Math.floor(milliseconds / 100);

  return (
    <div className={styles.timer}>
      <div className={styles.timer__heading}>
        <img src={TimerIcon} alt="Timer Icon" className={styles.timer__icon} />
        <p className={styles.timer__title}>Hurry up! Sale Ends in</p>
      </div>
      <div className={styles.timer__time}>
        <span>{hours.toString().padStart(2, '0')} h</span>
        <span>:</span>
        <span>{minutes.toString().padStart(2, '0')} m</span>
        <span>:</span>
        <span>
          {seconds.toString().padStart(2, '0')}.{formattedMilliseconds} s
        </span>
      </div>
    </div>
  );
};

export default Timer;
