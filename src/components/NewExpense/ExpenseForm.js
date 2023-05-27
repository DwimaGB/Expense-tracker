import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm() {
    const [input, setInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event)=>{
        setInput(prevInput=>({...prevInput, enteredTitle: event.target.value}));
    }
    const amountChangeHandler = (event)=>{
        setInput(prevInput=>({...prevInput, enteredAmount: event.target.value}));
    }
    const dateChangeHandler = (event)=>{
        setInput(prevInput=>({...prevInput, enteredDate: event.target.value}));
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: input.enteredAmount,
            amount: input.enteredAmount,
            date: new Date(input.enteredDate),
        };

        console.log(expenseData);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type='text'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type='number' min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date'></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}