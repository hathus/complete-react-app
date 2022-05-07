import Card from "../UI/Card";
import ExpesesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredByYear, setFilteredYear] = useState("2022");

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredByYear;
  });

  const changeYearFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpesesFilter
          selected={filteredByYear}
          onChangeDateFilter={changeYearFilter}
        />
        <ExpensesList items={expenses} />
      </Card>
    </li>
  );
}

export default Expenses;
