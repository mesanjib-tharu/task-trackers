import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./shared/Modal";
import { editTask } from "./features/taskSlice";

function TaskEdit({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(task);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTask({
        id: formData.id,
        title: formData.title,
        description: formData.description,
        status: formData.status,
      })
    );

    setIsModalOpen(false);
    setIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <div className="p-6">
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setIsEdit(false);
            }}
          >
            <h2 className="text-xl font-semibold mb-3 text-indigo-500">
              Update Task
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Task Name"
                  className="w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="description"
                  placeholder="Task Description"
                  className="w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <select
                  name="status"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="text-gray-400">
                    Please Select Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="flex justify-between space-x-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-transparent hover:text-indigo-600 hover:border hover:border-indigo-600"
                >
                  Update Task
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                    setIsEdit(false);
                  }}
                  className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-md hover:bg-indigo-600 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsEdit(!isEdit);
            setIsModalOpen(!isModalOpen);
          }}
          className="px-3 py-1 border border-blue-600  text-gray-600 rounded-md  hover:bg-blue-600 hover:text-white hover:border-blue-800 cursor-pointer"
        >
          Edit
        </button>
      )}
    </>
  );
}

export default TaskEdit;
