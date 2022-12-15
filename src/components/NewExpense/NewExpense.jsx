import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ addExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  // if (!showForm) {
  //   return (
  //     <div className="new-expense">
  //       <div className="new-expense__actions">
  //         <button onClick={showFormHandler}>Add Expense</button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={enableEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showFormHandler={disableEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
