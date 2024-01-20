import counterReducer from "@/components/counter/CounterSlice";
import tasksReducer from "@/components/tasks/TasksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        counter: counterReducer
    }
})

export default store