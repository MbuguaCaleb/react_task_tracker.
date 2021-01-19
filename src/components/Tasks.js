import Task from "./Task"

//rafce
//destructuring is a very good alternative

const Tasks = ({tasks}) => {
    return (
        <>
         {tasks.map((task)=>(
             <Task key={task.id} task={task}/>
         ))}   
        </>
    )
}

export default Tasks
