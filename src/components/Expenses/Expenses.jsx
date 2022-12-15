import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [year, changeYear] = useState("2021");
  const changeFilterHandler = (year) => {
    changeYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className={"expenses"}>
        <ExpensesFilter selected={year} onFilterChange={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
