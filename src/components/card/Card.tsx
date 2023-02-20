import { Link } from 'react-router-dom'

type ICard = {
    message: string
    url: string
    name: string
    datetime: string
    avatar: string
    close: () => void
}

function Card({ message, url, name, datetime, avatar, close }: ICard) {
    return (
        <Link to={`/chat/${url}`} onClick={close}>
            <div className="flex items-center justify-between gap-4 p-4 bg-slate-200 mb-4">
                <img
                    src={avatar}
                    className="rounded-full object-cover w-12 h-12"
                    alt="loading..."
                />
                <div className="flex-1">
                    <strong>{name}</strong>
                    <p className="text-gray-500">{message}</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span>{datetime}</span>
                    <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
                        6
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
