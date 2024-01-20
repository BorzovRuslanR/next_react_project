'use client';
import React, { useState } from 'react'

export default function TasksListComponent() {

  const [counter, setCounter] = useState(0);



  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <div className='flex items-center'>{counter}</div>
    </div>
  )
}
