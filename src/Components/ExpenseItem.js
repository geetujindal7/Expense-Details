import React, { useState } from 'react'
import '../App.css'
import Chart from './Chart'
import EachExpenseItem from './EachExpenseItem'

function ExpenseItem(props) {
    const [year, setYear] = useState('2022')

    const handleYear = (e) => {
        setYear(e.target.value)
       // props.handleYearDate(year)

    }

    // eslint-disable-next-line eqeqeq
    const filteredex = props.obj.filter((e) =>  new Date(e.date).getFullYear() == year)
    console.log(filteredex)

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
                <Chart items = {filteredex}/>
                <EachExpenseItem obj={filteredex}/>
                </div>
               
            </div>
        </>
    )
}

export default ExpenseItem
