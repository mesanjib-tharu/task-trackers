import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addTask } from './features/taskSlice';
function TaskAdd() {

    const dispatch = useDispatch();
    const initState = {
        title:"",
        description:"",
        status:""
    }
    const [formData, setFormData] = useState(initState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask = {
            id: uuid4(),
            ...formData
        }
        dispatch(addTask(newTask));
        setFormData(initState);
    }
      
  return (
    <form className='mb-6' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold mb-3 text-indigo-500'> Add New Task </h2>
        <div className='mb-4'>
            <input type='text' placeholder='Task Name' name='title'  className='w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required 
            value={formData.title}
            onChange={handleChange}
            />
        </div>

        <div className='mb-4 '>
            <textarea placeholder='Task Description'
              name="description"
        value={formData.description}
        onChange={handleChange} className='w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2' rows={3}></textarea>
        </div>
        <div className='mb-4'>
            <select name="status" value={formData.status} onChange={handleChange} className={`w-full cursor-pointer px-3 py-3  border border-gray-600 rounded-md focus:outline-none focus:ring-2 ${
    formData.status === '' ? 'text-gray-400' : 'text-black'
  }`}>
                <option value={""} className='text-gray-400 py-2'>Please Select status</option>
                <option className='text-gray-800 py-2' value={"Pending"}>Pending</option>
                <option className='text-gray-800 py-2' value={"In Progress"}>In Progress</option>
                <option className='text-gray-800 py-2' value={"Completed"}>Completed</option>
            </select>
        </div>

        <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'> Add Task</button>
    </form>
  )
}

export default TaskAdd