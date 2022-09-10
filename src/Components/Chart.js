import React from 'react'

function Chart(props) {

    const details = [
        {label: 'Jan' , value: 0},
        {label: 'Feb' , value: 0},
        {label: 'Mar' , value: 0},
        {label: 'Apr' , value: 0},
        {label: 'May' , value: 0},
        {label: 'Jun' , value: 0},
        {label: 'Jul' , value: 0},
        {label: 'Aug' , value: 0},
        {label: 'Sep' , value: 0},
        {label: 'Oct' , value: 0},
        {label: 'Nov' , value: 0},
        {label: 'Dec' , value: 0},
    ]

    for(const exp of props.items)
    {
        const expmonth = new Date(exp.date).getMonth();
        details[expmonth].value += exp.amount;
    }

    const maxValue = Math.max(...details.map((e) => e.value))
    let barFillHeight = '0%';
    if (maxValue > 0) {
    barFillHeight = details.map((e, key) => {
            return  Math.round(((details[key].value)/maxValue) * 100) + 'px'
    })
}

   // const aa = barFillHeight.toString();
  

 
   
  return (<>
    <div className='Chart'>
    {
        details.map((e,key) => {
            return (
                <div key={key} className='fill'>
                <div className='chart-bar__inner'>
                    <div >
                        <div style={{height: barFillHeight[key] , backgroundColor: 'red'}}>
                        {console.log(barFillHeight[key])}
                        </div>
                    </div>
                </div>
                <p>{e.label}</p>
            </div>
            )
        })
    }
       
    </div>
    </>
  )
}

export default Chart