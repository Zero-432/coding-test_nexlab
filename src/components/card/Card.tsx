import { Link } from 'react-router-dom'
import avatar from '../../assets/img/avatar.jpg'

function Card() {
    return (
        <Link to="/chat/test">
            <div className="flex items-center justify-between gap-4 p-4 bg-slate-200 mb-4">
                <img
                    src={avatar}
                    className="rounded-full object-cover w-12 h-12"
                    alt="loading..."
                />
                <div className="flex-1">
                    <strong>Hurin emar</strong>
                    <p className="text-gray-500">Sure 8:pm</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span>02 Feb</span>
                    <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
                        6
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
