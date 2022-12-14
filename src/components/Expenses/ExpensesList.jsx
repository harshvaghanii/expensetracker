import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, year }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  if (year === "All") {
    return (
      <ul className="expenses-list">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
    );
  }

  if (filteredExpenses.length === 0) {
    return <h2 className={"expenses-list__fallback"}>No Expenses Found! !</h2>;
  }

  return filteredExpenses.map((expense) => {
    return <ExpenseItem key={expense.id} expense={expense} />;
  });
};

export default ExpensesList;
