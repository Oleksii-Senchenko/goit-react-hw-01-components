import css from './statistics.module.css';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';

export function StatisticsList({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return <Statistics key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Заменяем PropTypes.number на PropTypes.string
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};