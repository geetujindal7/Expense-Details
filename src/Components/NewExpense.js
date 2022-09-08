import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const [newExpense, setNewExpense] = useState(true)

    
  return (
    <>
    {
        newExpense ? (<div className='AddExpense'>
            <div  className='AddExpenseButton'>
                <h3 className='AddExpenseButtonLabel' onClick={()=> setNewExpense(false)}>Add Expense</h3>
            </div>
        </div>) : <ExpenseForm handleObjData={props.handleObjData}/>
    }
    </>
  )
}

export default NewExpense
