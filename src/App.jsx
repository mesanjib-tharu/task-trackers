import './App.css'
import { taskConstants } from './constants/task-constant';
import { Loader } from './components/shared/Loaders';
import Wrapper from './components/shared/Wrapper';
const { TITLE, Task_URL } = taskConstants;

function App() {



  return (<>

<Wrapper className="flex gap-10 pt-20 md:flex-row flex-col">
    <h2 className='text-2xl text-sky-300'> Task Tracker </h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</Wrapper>
    </>
  )
}

export default App
