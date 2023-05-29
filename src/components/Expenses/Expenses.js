import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import './ExpensesFilter.css'

export default function Expenses(props) {

    const [filteredYear, setFilterYear] = useState(`${new Date().getFullYear()}`);

    const dateHandler = (year) => {
        setFilterYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onDateSelected={dateHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}