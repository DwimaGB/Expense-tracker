import './ExpenseForm.css';

export default function ExpenseForm() {
    return (
        <form>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <lablel>Title</lablel>
                    <input type='text'></input>
                </div>
                <div className='new-expense__control'>
                    <lablel>Amount</lablel>
                    <input type='number' min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <lablel>Date</lablel>
                    <input type='date'></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}