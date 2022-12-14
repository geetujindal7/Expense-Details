import React, {  } from 'react'

function EachExpenseItem(props) {

    return (
        <>
        <div>
        {
              props.obj.length ===0 ? <p className='NoExpense'>No Expense Found</p> : props.obj.map((e, key) => {
                    return (
                        <div key={key} className='eachitem'>
                            <div className='eachitemcontainer'>
                                <div className='datetitlecontainer'>
                                    <div className='dateContainer'>
                                       <div className='datadateentered'>
                                      
                                        <div>{new Date(e.date).toLocaleString('en-US', {day: '2-digit'})}</div>
                                        <div>{new Date(e.date).toLocaleString('en-US', {month: 'long'})}</div>
                                        <div>{new Date(e.date).getFullYear()}</div>
                                       </div>
                                    </div>
                                    <h3>{e.expense}</h3>
                                </div>
                                <h3>${e.amount}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
            
        </>
    )
}

export default EachExpenseItem