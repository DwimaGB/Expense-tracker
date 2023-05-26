import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 799.9, date: new Date().toLocaleDateString('en-IN')},
  ];

  return (
    <div>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
