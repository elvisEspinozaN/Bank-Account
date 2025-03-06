import { useState } from "react";
import {
  transfer,
  selectBalance,
  deposit,
  withdrawal,
} from "./transactionsSlice";
import "./transactions.scss";
import { useSelector, useDispatch } from "react-redux";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [amountStr, setAmountStr] = useState("0.00");
  const [recipient, setRecipient] = useState("");
  const [error, setError] = useState(null);

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();
    setError(null);

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;

    const amount = +amountStr;

    if (amount <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    if (action === "withdraw" && amount > balance) {
      setError("Insufficient funds available");
      return;
    }

    if (action === "transfer") {
      if (recipient.length === 0) {
        setError("Recipient's name required");
        return;
      }
      if (amount > balance) {
        setError("Insufficient funds available");
        return;
      }
    }

    if (action === "transfer") {
      // The `transfer` action is dispatched with a payload containing
      // the amount and the recipient.
      dispatch(transfer({ amount, name: recipient }));
    } else if (action === "deposit") {
      dispatch(deposit({ amount }));
    } else if (action === "withdraw") {
      dispatch(withdrawal({ amount }));
    }
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdraw">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input
              placeholder="Recipient Name"
              name="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}
