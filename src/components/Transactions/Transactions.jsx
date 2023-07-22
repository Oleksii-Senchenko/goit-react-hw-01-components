import PropTypes from 'prop-types';


import css from './Transaction.module.css';
export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.listName}>Type</th>
          <th className={css.listName}>Amount</th>
          <th className={css.listName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.list} key={id}>
              <td className={css.item}>{type}</td>
              <td className={css.item}>{amount}</td>
              <td className={css.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};