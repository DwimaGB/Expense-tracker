import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

export default function NewExpense(props){

    const createNewExpense = enteredExpenseData=>{
        const expenseData = {
            ...enteredExpenseData,
            id: `e${props.expenses.length+1}`,
        };

        props.onAddNewExpense(expenseData);
    };

    return (
        <Card className='new-expense'>
            <ExpenseForm onSubmitNewExpense={createNewExpense}/>
        </Card>
    )
}