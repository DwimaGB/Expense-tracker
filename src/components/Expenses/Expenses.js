import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

export default function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className="expenses">
            {expenses.map(expenseItem =>(
                <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date.toISOString()}/>
            ))}
        </Card>

    );
}