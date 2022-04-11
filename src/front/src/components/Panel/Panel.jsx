import { PanelConteiner } from './styles'
import {Link} from 'react-router-dom'

export default function Panel() {
    return (
        <PanelConteiner>
            <div>
                <h1>Lorem, ipsum dolor sit </h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero animi dicta possimus sequi similique temporibus fugiat accusamus. Libero quis odio quae laboriosam sint ipsum beatae voluptatum maiores repudiandae recusandae! Fuga.</span><br></br>
                <Link to="/indices"><button>Ver índices</button></Link>
            </div>
            <div id='logo'>
                <img src="../assets/imgs/Logo_001.png" alt="" />
            </div>
        </PanelConteiner>
    )
}