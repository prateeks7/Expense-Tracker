import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import {useState} from 'react';
const expenses = [
  {
    id: "1",
    title:"Car Insurance",
    amount:"1000",
    date: new Date(2020,3,20),
  },
  {
    id: "2",
    title:"Laptop Insurance",
    amount:"3000",
    date: new Date(2019,5,19),
  },
  { 
    id: "3",
    title:"Mobile Insurance",
    amount:"4000",
    date: new Date(2020,5,20),
  },
  {
    id: "4",
    title:"House Insurance",
    amount:"10000",
    date: new Date(2021,3,21),
  }
];
function App() {
  const [expenseList,addExpenseList] = useState(expenses);
  const addExpenseHandler = expense => {
    addExpenseList(prevExpense =>
    {
      return [...prevExpense,expense];
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenseList}></Expenses>
    </div>
    
  );
}

export default App;
