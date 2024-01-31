'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect, useState } from 'react'
import { addTask, editTask, initStore, removeTask } from './TasksSlice';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { CollapsForm } from './CollapsForm';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { EditTask } from './EditTask';

export default function TasksListComponent() {

  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks)
  
  useEffect(() => {
    dispatch(initStore())
  }, [])

  return (
    <div className='m-6'>
      <CollapsForm>
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
          <Input type="text" id='description' name='desc'/>
          <Button type='submit'>Add</Button>
        </form>
      </CollapsForm>
        <div className='py-2 grid grid-cols-1 sm:grid-cols-3 gap-1'>
          {
            tasks.map(task => {
              return <Card className='m-4' key={task.id}>
                <CardHeader>
                  <CardTitle className={task.completed ? 'line-through' : ''}>{task.title}</CardTitle>
                  <CardDescription>{task.desc}</CardDescription>
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`checkbox-done-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={(value) => {
                      dispatch(editTask({
                        id: task.id,
                        completed: value as boolean
                      }))
                    }} 
                    />
                    <label
                      htmlFor={`checkbox-done-${task.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Done
                    </label>
                </div>
                </CardHeader>
                
                <CardFooter className='gap-2'>
                  <EditTask task={task}/>
                  <Button className='w-20' onClick={() => dispatch(removeTask(task.id))} variant='destructive'>Delete</Button>
                </CardFooter>
              </Card>
            })
          }
        </div>
    </div>
  )
}
