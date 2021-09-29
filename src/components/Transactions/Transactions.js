import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

export default function Transactions({ items }) {
    return (
      <table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.tab}>
      <th className={styles.cap}>Type</th>
      <th className={styles.cap}>Amount</th>
      <th className={styles.cap}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) =>(
    <tr className={styles.tab} key={id}>
       <td className={styles.cell}>{type}</td>
       <td className={styles.cell}>{amount}</td>
       <td className={styles.cell}>{currency}</td>
    </tr>
    ))}
            </tbody>
            </table>
 );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.number,
    }),
  ),
};