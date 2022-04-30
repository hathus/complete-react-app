import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("es-MX", { month: "long" }).toUpperCase();
  const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
