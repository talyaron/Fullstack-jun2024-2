import { useTodoListMV } from "./TodoLiseMV";
import DeleteIcon from "../../../assets/icons/delete.svg";

const TodoList = () => {
    const { tasks, setTasks } = useTodoListMV()


    function handleAddTask(event: any) {
        try {
            event.preventDefault();

            const text = new FormData(event.target).get("text") as string
            console.log(text)
            setTasks([...tasks, {
                text,
                id: crypto.randomUUID(),
                isCompleted: false
            }])

            event.target.reset()

        } catch (error) {
            console.error(error)
        }
    }

    function deleteTask(id: string) {
        try {
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    function handleToggleDone(id: string) {
        try {
            //get task by id
            // change isCompleted to the opposite value
            // update the task in the tasks array
            const task = tasks.find(task => task.id === id)
            if (!task) {
                throw new Error("Task not found")
            }
            task.isCompleted = !task.isCompleted
            setTasks([...tasks])
        } catch (error) {
            console.error(error)

        }
    }


    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}
                        style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}

                    >
                        <span onClick={() => handleToggleDone(task.id)}> {task.text}</span>
                        <img onClick={() => deleteTask(task.id)} src={DeleteIcon} alt="delete" />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddTask}>
                <input type="text" name="text" />
                <button>Add Task</button>
            </form>
            <button onClick={() => setTasks([])}>Clear</button>

        </div>
    )
}

export default TodoList