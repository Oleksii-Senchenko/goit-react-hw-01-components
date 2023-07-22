import css from './Statistic.module.css';
import PropTypes from 'prop-types';
import getRandomColor from '../../helpers/randomColors';

export function Statistics({ label, percentage }) {
  const randomColor = getRandomColor();

  const liStyle = {
    backgroundColor: randomColor, 
  };

  return (
    <li className={css.item} style={liStyle}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};