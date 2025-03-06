import { useDispatch, useSelector } from "react-redux";
import "./transactionHistory.scss";
import { selectHistory, undo } from "./transactionsSlice";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <button onClick={() => dispatch(undo())}>Undo</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {history.map((transaction, idx) => {
            return <TransactionRow key={idx} transaction={transaction} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
