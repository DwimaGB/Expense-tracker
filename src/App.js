import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import EXPENSE_SEEDS from './seeds/expenseSeeds';

function App() {
  const [expenses, setExpenses] = useState(EXPENSE_SEEDS);

  const addNewExpense = (expenseData)=>{
    setExpenses(prevExpenses => ([expenseData, ...prevExpenses]));
  } 


  return (
    <div>
      <NewExpense expenses={expenses} onAddNewExpense={addNewExpense}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
