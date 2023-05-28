import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


export default function ExpensesList(props) {

    const expenses = props.expenses;

    if (expenses.length > 0) {
        return (
            <ul className='expenses-list'>
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                })}

            </ul>
        );
    }
    else {
        return (
            <h2 className='expenses-list__fallback'>Found no expenses!</h2>
        );
    }
}