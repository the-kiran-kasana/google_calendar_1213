import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Child1({ count }) {
  return <h1>Child1 data is: {count}</h1>;
}

function Child({ count }) {
  return (
    <>
      <h1>Child data is: {count}</h1>
      <Child1 count={count} />
    </>
  );
}

function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("hello i am useEffect", count);
  }, [count]);

  return (
    <BrowserRouter>
      <>
        <Child count={count} />

        <button onClick={() => setCount(count + 1)}>Click</button>
        <p>{count}</p>

        <Routes>
          <Route path="/" element={<Child count={count} />} />
          <Route path="/child1" element={<Child1 count={count} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;












import { useState,useReducer } from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'



//
//function reducer(state , action){
//        switch (action.type){
//          case 'inc' :
//            return  state + 1;
//          case 'dec' :
//            return state - 1;
//          default :
//            throw new Error()
//        }
//}
//
//
//function App() {
//  const [state ,dispatch] = useReducer(reducer ,  0 );
//  return (
//    <>
//      <button onClick={() => dispatch({type : 'inc'})}>+</button>
//      <h1>count : {state}</h1>
//      <button onClick={() => dispatch({type : 'dec'})}>-</button>
//    </>
//  )
//}
//
//
//
//export default App
