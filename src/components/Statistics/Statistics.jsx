import css from './Statistic.module.css';
import PropTypes from 'prop-types';
export function Statistics({ label, percentage }) {
  return (
    <li className={css.item}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
};
