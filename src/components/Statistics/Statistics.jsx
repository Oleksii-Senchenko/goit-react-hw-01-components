import css from './Statistic.module.css'


export function Statistics({ label, percentage}) {
  return (
    <li className={css.item}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}
