import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpesesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredByYear, setFilteredYear] = useState("2022");

  const expenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredByYear;
  });

  const changeYearFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpesesFilter
        selected={filteredByYear}
        onChangeDateFilter={changeYearFilter}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
