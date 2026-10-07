import { useState,useReducer,useLayoutEffect,useRef ,useEffect} from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'



function App(){

  return (
    <>
    <div style={{display:"flex", flexDirection:"column",backgroundColor: "DodgerBlue"}}>
     <input placeholder="enter anything" style = {{padding:5, margin:5, border:"5 solid"}}/>
     <input placeholder="enter anything" style = {{padding:5, paddingTop : 1 , margin:5, border:"5 solid"}}/>
     <div style={{ padding: "20px 40px 50px 20px",margin:5,border: "2px solid"}}>hello, this is the CSS</div>
     <button>click</button>
     </div>
    </>
  )
}



export default App
