import React from 'react'
import { decrement, increment,reset ,incrementByAmount } from '../redux/counterSlice1'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function Counter1() {
  const [range,setRange] = useState("")
  //useSelector hook is used to access the state in the store
    const count = useSelector((state) => state.counter.value) //counter is the reducer and value is the state
    //useDispatch hook is used to dispatch the function
  const dispatch = useDispatch()
  
  const handleRange = ()=>{
    if(!range){
      alert('Please provide range')
    }
    else{
      dispatch(incrementByAmount(Number(range)))
    }
  }

  return (
    <div>
      <div className='mt-5 d-flex align-items-center justify-content-center flex-column w-100'>
      <h1 style={{fontSize:'70px'}}>{count}</h1>
        <div className='mt-5'>
          <button className='btn btn-success p-3'
            aria-label="Increment value"
            onClick={() => dispatch(increment(Number(range)))}
          >
            Increment
          </button>
          
          <button className='btn btn-warning ms-4 p-3'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button className='btn btn-danger ms-4 p-3'
            aria-label="Decrement value"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
        <div className='d-flex mt-5'>
          <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control' style={{borderColor:'black'}} placeholder='Enter the number range' />
          <button onClick={handleRange} className='btn btn-primary ms-3 '>Increment by amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter1