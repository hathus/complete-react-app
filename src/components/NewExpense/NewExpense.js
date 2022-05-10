import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [isVisible, setIsVisible] = useState(true);

  const isVisibleHandler = () => {
    setIsVisible((prevIsVisibleValue) => !prevIsVisibleValue);
  };

  return (
    <div className="new-expense">
      {isVisible && <button onClick={isVisibleHandler}>Add New Expense</button>}
      {!isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          isVisibleData={isVisibleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
