'use client';

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { increment, dicriment } from './CounterSlice'
import { Button } from '../ui/button'

export default function CounterComponent() {

    const dispatch = useAppDispatch();
    const counter = useAppSelector(state => {
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
