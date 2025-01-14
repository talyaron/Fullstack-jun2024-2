import { useState } from "react";
import { Todo } from "../../../model/tasks/tasksModel";

export function useTodoListMV() {

    //tasks is the state that will hold the list of tasks and will be rended to screen

    //setTasks is the function that will be used to update the tasks state
    const [tasks, setTasks] = useState<Todo[]>([])


    return {
        tasks,
        setTasks
    }
}