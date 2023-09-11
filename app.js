// App.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 7, 14),
    },
    // Add more expense items here
  ];

  return (
    <div className='App'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;

// ExpenseItem.js
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  );
};

export default ExpenseItem;

// ExpenseDate.js
import React from 'react';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;

// ExpenseDetails.js
import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <p>Amount: ${props.amount}</p>
    </div>
  );
};

export default ExpenseDetails;
