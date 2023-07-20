import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data/data.json';

export function StatisticsList() {
  return (
    <section class="statistics">
      <ul class="stat-list">
        {data.map((id, label, percentage) => {
          return <Statistics id={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
}
