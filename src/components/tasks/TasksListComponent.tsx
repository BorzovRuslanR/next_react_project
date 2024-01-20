'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useState } from 'react'
import { addTask, removeTask } from './TasksSlice';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export default function TasksListComponent() {

  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks)


  return (
    <div className='m-6'>

      <form className='flex flex-col gap-4' onSubmit={(event) => {
          event.preventDefault()
          const form = event.target
          if(form instanceof HTMLFormElement) {
          const formData = new FormData(form)
          const title = formData.get('title') as string
          const desc = formData.get('desc') as string

          dispatch(addTask({
            title,
            desc,
            id: String(Math.random()),
            completed: false
          }))
        }
        }}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id='title' name='title'/>
        <Label htmlFor="desc">Description</Label>
        <Input type="text" id='description' name='description'/>
        <Button type='submit'>Add</Button>
      </form>

        {
          tasks.map(task => {
            return <div className='m-4' key={task.id}>
              {task.title}
              <Button onClick={() => dispatch(removeTask(task.id))}>Delete</Button>
            </div>
          })
        }
    </div>
  )
}
