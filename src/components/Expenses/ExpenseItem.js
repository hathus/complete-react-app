import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'
import { useState } from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle('Title updated!')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change a Title</button>
    </Card>
  );
}

export default ExpenseItem;
