import {  useEffect, useState } from 'react';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense';

const getlocaldata = () => {
  let lists = localStorage.getItem('datas')
  if(lists)
  {
    console.log(lists)
    return JSON.parse(lists);
  }
  else{
    return []
  }
}

function App() {

  const obj = [{
    id:1,
    expense: 'Petrol',
    date: new Date(2020,7,14),
    amount: 260.5
  },
  
  {
    id:1,
    expense: 'AC',
    date: new Date(2022,7,14),
    amount: 260.5
  },
  
 
  ];

  const [objects, setObj] = useState(getlocaldata())

  //const [data, setData] = useState(getlocaldata())


  const handleObjData = (id) => {
    setObj((e) => {
      return [id, ...e]
    })
    console.log(objects)
  }
  // const handleYearDate = (id) => {
  //     console.log(id)     
  //     //console.log(objects.filter((e) =>  e.date.getFullYear() !== id))
  //     const obb = objects.filter((e) =>  e.date.getFullYear() == id)
  //    setfiltered(obb)
  // }

  useEffect(() => {
    localStorage.setItem('datas', JSON.stringify(objects));
    
  }, [objects]);


  return (
    <>
    <NewExpense handleObjData = {handleObjData} />
    <ExpenseItem obj={objects} />
</>
  );
}

export default App;
