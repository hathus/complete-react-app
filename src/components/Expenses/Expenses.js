import { useState } from "react";
import Card from "../UI/Card";
import ExpesesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

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
        <ExpensesChart expenses={expenses} />
        <ExpensesList items={expenses} />
      </Card>
    </li>
  );
}

export default Expenses;
