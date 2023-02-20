import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import avatar from '../../assets/img/avatar.jpg'
import { useData } from '../../contexts/DataContext'
import { IUser } from '../../types/user.types'
import Input from '../input/Input'

function Message() {
    const path = useLocation().pathname.split('/')[2]
    const { reloadData, data } = useData()

    useEffect(() => {
        reloadData(path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])

    return (
        <div className="h-full relative">
            <div>
                <h3 className="text-xl font-semibold">Gold Coast</h3>
                <span>From: Hali</span>
            </div>
            <hr className="my-3 mx-0 border-gray-300" />
            <div className="mt-5 h-2/3 scrollbar-thin scrollbar-thumb-gray-300 ">
                <div className="flex flex-col gap-10 pr-4">
                    <div className="w-1/2 flex items-start justify-start gap-2">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={avatar}
                                className="rounded-full object-cover w-12 h-12"
                                alt="loading..."
                            />
                            <span>10:00</span>
                        </div>
                        <div className="bg-gray-400 rounded-full">
                            <p className="p-3">
                                We invite you at our office for visit
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-end">
                        <div className="w-1/2 flex justify-end">
                            <div className="bg-blue-400 rounded-full">
                                <p className="p-3">
                                    We invite you at our office for visit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-start justify-start gap-2">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={avatar}
                                className="rounded-full object-cover w-12 h-12"
                                alt="loading..."
                            />
                            <span>10:05</span>
                        </div>
                        <div className="bg-gray-400 rounded-full">
                            <p className="p-3">Welcome</p>
                        </div>
                    </div>
                    {data.length > 0 &&
                        data.map((user: IUser) => (
                            <div
                                className="flex items-start justify-end"
                                key={user.id}
                            >
                                <div className="w-1/2 flex justify-end">
                                    <div className="bg-blue-400 rounded-full">
                                        <p className="p-3">{user.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <Input />
        </div>
    )
}

export default Message
