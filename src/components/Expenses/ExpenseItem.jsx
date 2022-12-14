import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ expense }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate expense={expense} />
      <div className={"expense-item__description"}>
        <h2>{`${expense.description}`}</h2>
        <div className={"expense-item__price"}>{`$${expense.price}`}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
