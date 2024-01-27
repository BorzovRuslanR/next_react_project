import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Task {
    id: string;
    title: string;
    desc?: string;
    completed: boolean;
}

export const TasksSlice = createSlice({
    name: "Tasks",
    initialState: [{
        id: '1',
        title: 'Learn JS',
        desc: 'Learn JS desc',
        completed: false
    }] as Task[],
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.push(action.payload);
        },
        removeTask(state, action: PayloadAction<string>) {
            return state.filter(task => task.id !== action.payload)
        },
        editTask(state, action: PayloadAction<Partial<Task>>) {
            const id = action.payload.id
            if (id) {
                const task = state.find(task => task.id === id)
                if (task) {
                    if (action.payload.title) task.title = action.payload.title
                    if (action.payload.desc) task.desc = action.payload.desc
                    if ('completed' in action.payload 
                    && typeof action.payload.completed === 'boolean') {
                        task.completed = action.payload.completed
                    } 
                }
            }
        }
    },
})

export const { addTask, editTask, removeTask } = TasksSlice.actions;

const tasksReducer = TasksSlice.reducer

export default tasksReducer