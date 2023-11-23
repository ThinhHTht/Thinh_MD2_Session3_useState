import React from 'react'

function PracticeJs() {

          const [count, setCount] = useState(10);
    const handleChangeState = () =>{
        setCount(count +1)
    }
  return (
    <div>
        {/* <h1>Practice</h1> */}
        <div>Number: {count}</div>
        <button onClick={handleChangeState}>Up</button>
        <button>Down</button>
    </div>
  )
  
}

export default PracticeJs
