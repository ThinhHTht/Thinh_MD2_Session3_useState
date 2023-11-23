import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(10);
    console.log(count);
    const [text, setText] = useState("Hello world");
   const handleChangeText = () => {
  setText("Thank you!")
   }
   const [toggle, setToggle] = useState(true);
 const handleChangeState = () => {
    setToggle(!toggle);
 }
 const [arrList, setArrList] = useState([1, 3, 5, 7]);
 const handleRandom = () => {
    setArrList([...arrList, Math.floor(Math.random()*10)])
 }
 const [objList, setObjList] = useState({
    objNumber: 50,
    objArr: [2,4,6,8]
 })

 // Arr + obj
 const [listStudent, setListStudent] = useState([
  {id: 1, name:"Khanh", age: 20, address:"Ha noi" },
  {id: 2, name:"Khanh2", age: 20, address:"Ha noi" },
  {id: 3, name:"Khanh3", age: 20, address:"Ha noi" },
  {id: 4, name:"Khanh4", age: 20, address:"Ha noi" }
]) 

  return (
    // useState là 1 hook được cung cấp bởi ReactJS, dùng để lưu trữ giá trị trong component nên chỉ có hiệu lực trong component đó
    // 
    //Cu phap:
    // const [nameState, setNameState] = useState(initialStateValue)
    //nameState: ten state
    // setNameState: là hàm dùng để set lại giá trị cho nameState

    <div>
        <h1>UseState</h1>
        {/* Number */}
        <div>Number: {count}</div>
        <button onClick={() => setCount(count-1)}>Down</button>
        <button onClick={() => setCount(count+1)}>Up</button>
        {/* // String */}
        <div>{text}</div>
        <button onClick={handleChangeText}>Change</button>
       {/* event: on...
          function: handle... */}
          {/* Toan tu 3 ngoi: la viet tat cua if else 
           dieu kien ? statement true : statement false
          */}

          {/* Boolean */}
{toggle ? ( <div>
    <p>How are you?</p>
    <button onClick={handleChangeState}>Click me!</button>
</div>) : (<div>
    <p>Fine</p>
    <button onClick={handleChangeState}>Click me!</button>
</div>)} 
 {/* 2: Reference data type; */}
<h3>Array</h3>
<div>Array gom: {arrList.toString()}</div>
<button onClick={handleRandom}>Random</button>

{/* 
// Object */}
<h3>Object</h3>
<div>Number object: {objList.objNumber}</div>
<button onClick = {() => setObjList({...objList, objNumber: objList.objNumber + 10})}>Up</button>

<div>Array object: {objList.objArr.toString()}</div>
<button onClick = { () => setObjList({...objList, objArr: [...objList.objArr, Math.floor(Math.random()*10)]})}>Random number</button>

{/* // Object + Arr */}
<h3>Array + Object</h3>
<table border={1}>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
    <th>age</th>
    <th>address</th>
    <th>action</th>
    </tr>
  </thead>
  <tbody>
  {listStudent.map((e) => (   
     <tr key={e.id}>
   
   <td>{e.id}</td>
   <td>{e.name}</td>
   <td>{e.age}</td>
   <td>{e.address}</td>
   <td>
    <button>Edit</button>
    <button>Delete</button>
   </td>

 </tr>))}

  </tbody>
</table>
    </div>


  )
}

export default UseState