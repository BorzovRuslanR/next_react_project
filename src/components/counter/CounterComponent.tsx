'use client';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, dicriment } from './CounterSlice'
import { Button } from '../ui/button'

export default function CounterComponent() {

    const dispatch = useDispatch();
    const counter = useSelector(state => {
        return state.counter
    })

  return (
    <div>
        <div>{counter}</div> 
        <Button onClick={() => dispatch(increment()) }>
            +
        </Button>
        <Button onClick={() => dispatch(dicriment()) }>
            -
        </Button>
    </div>
  )
}
