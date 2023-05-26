import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div className="expenses">
            {expenses.map(expenseItem =>(
                <ExpenseItem title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date.toISOString()}/>
            ))}

        </div>

    );
}