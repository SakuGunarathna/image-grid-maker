import { MenuItem } from "../../components";
import { menu } from "../../enums/menu";
import backgroundImage from '../../background.jpg';
import '../../styles/MenuContainer.css';

const MenuContainer = () => {
    return (
        <div className="container-menu" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="div-text">
                <span className="span-text" >Make your MEMORIES</span>
            </div>
            <div className="div-box" >{
                menu.map((menu) => (
                    <MenuItem key={menu.id} {...menu} />
                ))
            }
            </div>
        </div>
    )
}
export default MenuContainer;