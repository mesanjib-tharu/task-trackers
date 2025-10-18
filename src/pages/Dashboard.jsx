import React from 'react'
import TaskList from '../components/TaskList';
import TaskAdd from '../components/TaskAdd';
function Dashboard() {
  
  return (
    <div>
      <TaskAdd />
      <TaskList />
      </div>
  )
}

export default Dashboard