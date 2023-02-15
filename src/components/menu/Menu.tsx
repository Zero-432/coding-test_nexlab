import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
    faHome,
    faMessage,
    faCalendar,
    faTag,
    faFile,
    faGear,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import avatar from '../../assets/img/avatar.jpg'

function Menu() {
    return (
        <div className="w-1/6 min-h-screen bg-gray-200">
            <div className="flex flex-col items-center justify-center pt-10">
                <div className="w-24 h-24">
                    <img
                        src={avatar}
                        className="rounded-full object-cover w-full h-full border-4 border-white"
                        alt="loading..."
                    />
                </div>
                <div className="mt-3 font-semibold">
                    <Link to="/">
                        Jimi Hendrix{' '}
                        <FontAwesomeIcon
                            className="ml-2"
                            icon={faChevronDown}
                        />
                    </Link>
                </div>
            </div>
            <ul className="flex flex-col gap-10 mt-12 px-10 text-gray-600 font-medium">
                <li>
                    <Link to="/properties">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="uppercase ml-5 tracking-wider">
                            Properties
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/chat">
                        <FontAwesomeIcon icon={faMessage} />
                        <span className="uppercase ml-5 tracking-wider">
                            Chat
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="uppercase ml-5 tracking-wider">
                            Calendar
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/offers">
                        <FontAwesomeIcon icon={faTag} />
                        <span className="uppercase ml-5 tracking-wider">
                            Offers
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/documents">
                        <FontAwesomeIcon icon={faFile} />
                        <span className="uppercase ml-5 tracking-wider">
                            Documents
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faGear} />
                        <span className="uppercase ml-5 tracking-wider">
                            Settings
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
