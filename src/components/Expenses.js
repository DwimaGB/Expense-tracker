import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

export default function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className="expenses">
            {expenses.map(expenseItem =>(
                <ExpenseItem title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date.toISOString()}/>
            ))}

        </Card>

    );
}