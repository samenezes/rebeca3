import './fullTask.css'
import { useNavigate } from 'react-router-dom';
export function FullTask({ task }) {

    const navigate = useNavigate();

    return (
        <section className="fullTask">
            

            <h1 className="title">{task.title}</h1>
            <h2 className="description">{task.details}</h2>
            <button id='voltarbtn' onClick={() => {
                navigate('/');
            }}> Voltar </button>
        </section>
    )
}