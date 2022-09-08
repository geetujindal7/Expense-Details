import React, { useState } from 'react'
import '../App.css'
import EachExpenseItem from './EachExpenseItem'

function ExpenseItem(props) {
    const [year, setYear] = useState(2021)

    const handleYear = (e) => {
        setYear(e.target.value)
       // props.handleYearDate(year)

    }

    const filteredex = props.obj.filter((e) => e.date.getFullYear() == year)

    return (
        <>
            <div className='expenseItems'>
                <div className='filterbyyear'>
                    <h2>Filter by year</h2>
                    <select id="year" name="year" value={year} onChange={handleYear}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <div className='container_each_item'>
                <EachExpenseItem obj={filteredex}/>
                </div>
               
            </div>
        </>
    )
}

export default ExpenseItem