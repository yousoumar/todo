import './Loader.css';
import circle from './circle.svg';

export default function Loader() {
    return (
        <div className = "loader">
            <h1>#todo</h1>
            <div>Pour jamais oublieR</div>
            <div className="circle"><img src={circle} alt="" /></div>
        </div>
    )
}
