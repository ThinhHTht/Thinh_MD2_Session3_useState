import React, { useState } from 'react'

function HomeWork() {
    const [count, setCount] = useState(0);
    const [countText, setCountText] = useState(0);
     
  return (
    <div>HomeWork
        <h2>Bai 1</h2>
        <div>Bạn đã click {count} lần</div>
        <button onClick={() => setCount(count +1) }>Click để tăng số lần click</button>
<br />
<h2>Bai 2</h2>
<textarea rows="5" onChange={(e)=> setCountText(e.target.value.length) } />
<div>So ky tu: {countText}</div>
    </div>
  )
}

export default HomeWork