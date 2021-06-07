import { useHistory } from 'react-router';
import '../styles/MenuItem.css';

const MenuItem = ({ title, path }) => {
    const history = useHistory();

    const handleRoute = (path) =>{
        history.push(`/${path}`)
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title" onClick={()=>handleRoute(path)}>{title}</h5>
            </div>
        </div>
    )
};
export default MenuItem;