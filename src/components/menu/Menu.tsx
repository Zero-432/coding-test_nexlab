import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../assets/img/avatar.jpg'

function Menu() {
    return (
        <div className="w-1/6 bg-gray-200">
            <div className="flex flex-col">
                <img src={avatar} alt="loading..." />
                <div>
                    <a href="/">
                        Jimi Hendrix <FontAwesomeIcon icon="chevron-down" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu
