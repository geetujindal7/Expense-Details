import React, { useEffect, useState } from 'react'



function ExpenseForm(props) {

    const [formData, setform] = useState({
        title: '',
        amount: '',
        date: new Date()
    })

    const handleAmount = (e) => {
        setform((prev) => {
            return {
                ...prev,
                amount : e.target.value
            }
        })
    }

    const handleTitle = (e) => {
        setform((prev) => {
            return {
                ...prev,
                title : e.target.value
            }
        })
    }
    const handleDate = (e) => {
        setform((prev) => {
            return {
                ...prev,
                date : e.target.value
            }
        })
    }


  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(formData.date))
        if(formData.amount !== '' &&  formData.title !== '' && formData.date !== '')
        { 
            const data = {
                amount : formData.amount,
                expense: formData.title,
                date: new Date(formData.date)
            }
    
            console.log(data)
            setform((prev) => {
                return {
                    ...prev,
                    date : '',
                    amount: '',
                    title: ''
                }
            })
    
            props.handleObjData(data)
        }
        else{
            alert("Please enter all the details")
        }

        
    }
    return (
        <div className='AddExpenseCard'>
        <div>
        <form  className='FormData'>
                <div className='labelform'>
                    <label className='label'>Title</label>
                    <input className='inputtype' type="text" value={formData.title} onChange={handleTitle}></input>
                </div>
                <div className='labelform'>
                    <label className='label'>Amount</label>
                    <input className='inputtype' type="number" min={0.01} step={0.01} value={formData.amount} onChange={handleAmount}></input>
                </div>
                <div className='labelform'>
                    <label className='label'>Date</label>
                    <input className='inputtype dateinput' max="2022-12-30" min="2020-01-01" type="date" value={formData.date} onChange={handleDate}></input>
                </div>
               
            </form> 
        </div>
           
            <div>
            <div className='buttondv'>
            <button className='buttonSubmit' onClick={handleSubmit} type="submit">Add Expense</button>
            </div>
            </div>
          
        </div>
    )
}

export default ExpenseForm