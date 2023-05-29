import './ExpenseForm.css';
import { useState } from 'react';


export default function ExpenseForm(props) {

    //  Input state
    const [input, setInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {
        setInput(prevInput => ({ ...prevInput, enteredTitle: event.target.value }));
    }
    const amountChangeHandler = (event) => {
        setInput(prevInput => ({ ...prevInput, enteredAmount: event.target.value }));
    }
    const dateChangeHandler = (event) => {
        setInput(prevInput => ({ ...prevInput, enteredDate: event.target.value }));
    }

    // is form visible state
    const [isFormVisible, setShowExpenseForm] = useState(false);

    const hideNewExpenseForm = ()=>{
        setShowExpenseForm(false);
    }

    const showNewExpenseForm = ()=>{
        setShowExpenseForm(true);
    }
    

    // Form submit
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: input.enteredTitle,
            amount: input.enteredAmount,
            date: new Date(input.enteredDate),
        };

        props.onSubmitNewExpense(expenseData);

        setInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });


        setShowExpenseForm(false); // hiding the form
    }
    
    if(isFormVisible){
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input onChange={titleChangeHandler} value={input.enteredTitle} type='text' required></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input onChange={amountChangeHandler} value={input.enteredAmount} type='number' min="0.01" step="0.01" required></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input onChange={dateChangeHandler} value={input.enteredDate} type='date' min='2019-01-01' max='2023-12-31' required></input>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={hideNewExpenseForm}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        )
    }

    return (
        <div className='new-expense__controls' style={{justifyContent: 'center', alignItems: 'center'}}>
            <div className='new-expense__actions'>
                <button type='button' onClick={showNewExpenseForm}>Add New Expense</button>
            </div>
        </div>
    ) 
}