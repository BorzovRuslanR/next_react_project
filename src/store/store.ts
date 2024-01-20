import counterReducer from "@/components/counter/CounterSlice";
import tasksReducer from "@/components/tasks/TasksSlice";
import { configureStore } from "@reduxjs/toolkit";
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        counter: counterReducer
    }
})

export default store