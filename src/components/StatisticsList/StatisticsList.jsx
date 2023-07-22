import { Statistics } from 'components/Statistics/Statistics';
import css from './statistics.module.css'
import PropTypes from 'prop-types';
//К СОЖЕЛЕНИЮ НЕ ПОНЯЛ КАК ОТРЕНДЕРИТЬ ТАЙТЛ ПО УСЛОВИЮ, АНАЛОГИЮ С УРОКА НЕ НАШЕЛ. ТАМ БЫЛИ СТИЛИ ПО УСЛОВИЮ НО НЕ РАЗМЕТКА
// ТАКЖЕ ИНТЕРЕСТНО КАК ПОДСТАВИТЬ ФУНКЦИЮ ДЛЯ РАНДОМНЫХ ЦВЕТОВ ДЛЯ КАЖДОЙ ЛИШКИ, Я ПРОБЫВАЛ ПИСАТЬ ЕЕ ДО export function StatisticsList, 
//А ВЫЗЫВАТЬ ПОСЛЕ РЕТЕРНА, НО БЕЗУСПЕШНО. ЗАРАНИЕ СПАСИБО)))))))


export function StatisticsList({stats}) {
  return (
    <section class={css.statistics}>
      <ul class={css.list}>
        {stats.map(({id, label, percentage}) => {
          return <Statistics  key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
