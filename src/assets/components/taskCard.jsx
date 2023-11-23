import './taskCard.css'
import { useNavigate } from 'react-router-dom';


export function TaskCard({ index, editTask, deleteTask, updateTaskStatus, task, setSelectedTask }) {


    const navigate = useNavigate();

    return (


        <div className="taskCard">



            <div className="buttonsGroup">
                
                <button onClick={() => deleteTask(index)}>Excluir</button>
            </div>
            <div className="left">
                <h2 className='taskTitle'>{task.title}</h2>
                
            </div>

           


            <div className="buttonsGroup">
                <button onClick={() => { setSelectedTask(task)
                navigate('/detalhes');
}}>
                    Visualizar
                </button>
                
            </div>



        </div>
    )
}