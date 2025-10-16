import './App.css'
import { taskConstants } from './constants/task-constant';
import { Loader } from './components/shared/Loaders';
import Wrapper from './components/shared/Wrapper';
import TaskList from './components/TaskList';
const { TITLE, Task_URL } = taskConstants;

function App() {



  return (<>

<Wrapper className="flex gap-10 pt-20 md:flex-row flex-col">
    <TaskList />
</Wrapper>
    </>
  )
}

export default App
