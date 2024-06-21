import './main.scss'
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className='error'>
            <div className="container">
                <h1>Ошибка 404</h1>
                <p>такой вкладки не существует.</p>
                <Link to="/"><button>Вернуться на главную</button></Link>
            </div>
        </div>
    )
}
export default Error404;