import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return(
    <div className="container">
      <h1 className="heading">{props.title}</h1>
      <div>{props.amount}</div>
      {/* <ExpenseDate></ExpenseDate> */}
    </div>
  );
}

export default ExpenseItem;
