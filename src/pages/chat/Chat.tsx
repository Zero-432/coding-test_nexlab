import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    faSortDown,
    faMagnifyingGlass,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../components/card/Card'
import Message from '../../components/message/Message'
import avatar from '../../assets/img/avatar.jpg'

function Chat() {
    const [open, setOpen] = useState<boolean>(false)
    const path = useLocation().pathname.split('/')[2]

    return (
        <>
            <div className="flex items-center justify-end gap-10">
                <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <span className="ml-1 mr-3">Sale</span>
                    <FontAwesomeIcon icon={faSortDown} className="mb-2" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="max-[768px]:block min-[769px]:hidden"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <h2 className="text-4xl font-medium">Chat</h2>
            <div className="flex mt-3 gap-5 h-[90%]">
                <div
                    className={`max-[768px]:hidden w-1/3 pl-5 ${
                        open ? 'open max-[768px]:w-2/3' : ''
                    }`}
                >
                    <div className="flex items-center justify-between gap-4 mt-7">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="flex-none text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1"
                        />
                    </div>
                    <hr className="my-3 mx-0 border-gray-300 mr-5" />
                    <div className="h-2/3 scrollbar-thin scrollbar-thumb-gray-300 pr-5">
                        <Card
                            message="welcome"
                            name="Friend 1"
                            url="friend1"
                            datetime="02 Feb"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 2"
                            url="friend2"
                            datetime="12 Jan"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 3"
                            url="friend3"
                            datetime="21 Jun"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 4"
                            url="friend4"
                            datetime="23 Dec"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 5"
                            url="friend5"
                            datetime="19 Oct"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 6"
                            url="friend6"
                            datetime="13 Jun"
                            avatar={avatar}
                        />
                        <Card
                            message="welcome"
                            name="Friend 7"
                            url="friend7"
                            datetime="28 Feb"
                            avatar={avatar}
                        />
                    </div>
                </div>
                <div className="max-[768px]:w-full w-2/3">
                    {path && <Message />}
                </div>
            </div>
        </>
    )
}

export default Chat
