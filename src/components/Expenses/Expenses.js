import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import './ExpensesFilter.css'
import { useState } from "react";

export default function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilterYear] = useState(`${new Date().getFullYear()}`);

    const dateHandler = (year) => {
        setFilterYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onDateSelected={dateHandler}></ExpensesFilter>
            {expenses.map(expenseItem => (
                <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date.toISOString()} filteredYear={filteredYear} />
            ))}
        </Card>
    );
}