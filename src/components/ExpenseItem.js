import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('es-MX', { month: 'short'}).toUpperCase();
  const day = props.date.toLocaleString('es-MX', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-item'>
      <div className='expense-item__price'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
