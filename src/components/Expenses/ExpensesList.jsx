import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className={"expenses-list__fallback"}>No Expenses Found! !</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default ExpensesList;
