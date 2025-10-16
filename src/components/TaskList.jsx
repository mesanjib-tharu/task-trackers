import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchTodo } from "./features/taskSlice";


const TaskList = ()=>{
    const tasks = useSelector((state)=> state?.tasks?.tasks)
    const loading = useSelector((state)=> state?.tasks?.loading)
    const error = useSelector((state)=> state?.tasks?.error)


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodo())
    },[dispatch])


     return(
        <div>
            <h1>Tasks</h1>
            <ul className="space-y-4">
                {
                    loading ? <p>Task Loading</p> : error ?<p>There is an error as {error}</p>   : tasks?.map(task=>(
                        <li  key={task?.id} className="flex justify-between bg-gray-50 p-4 rounded-md"><div>
                            <h3 className="text-lg font-medium text-gray-800">{task?.title}</h3>
                            {task?.description && <p className="text-gray-600"> {task?.description}</p>}
                            <p className="mt-1 text-sm font-semibold">
                                Status: <span className="italic underline">{task?.status}</span></p>
                            </div>
                            <div className="space-x-2">
                                <button className="px-3 py-1 border border-blue-600  text-gray-600 rounded-md  hover:bg-blue-600 hover:text-white hover:border-blue-800 cursor-pointer">Edit</button>
                                <button className="px-3 py-1 border border-red-600 text-gray-600 hover:text-white rounded-md hover:bg-red-600 cursor-pointer">Delete</button>
                            </div>

                            </li>
                    ))
                }
            </ul>
        </div>
     )
}

export default TaskList