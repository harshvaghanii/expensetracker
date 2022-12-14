import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = ({ expenses }) => {
  const [year, changeYear] = useState("All");
  const changeFilterHandler = (year) => {
    changeYear(year);
  };

  return (
    <li>
      <Card className={"expenses"}>
        <ExpensesFilter selected={year} onFilterChange={changeFilterHandler} />
        <ExpensesList expenses={expenses} year={year} />
      </Card>
    </li>
  );
};

export default Expenses;
