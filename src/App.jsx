import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { TaskList } from './assets/components/TaskList'
import { FullTask } from './assets/components/fullTask'

function App() {

  const [selectedTask, setSelectedTask] = useState("")
  useEffect(() => { console.log('io') }, [selectedTask])
  return (
    <Router>
      <div>
        <nav>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList setSelectedTask={setSelectedTask} />} />
          <Route path="/detalhes" element={<FullTask task={selectedTask} />} />
          <Route path="/detalhes" element={<FullTask task={selectedTask} />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App
