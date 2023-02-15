import {
    faFaceSmile,
    faPaperPlane,
    faFile,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'
import {
    ChangeEvent,
    useEffect,
    useRef,
    useState,
    MouseEvent,
    KeyboardEvent,
} from 'react'
import { useLocation } from 'react-router-dom'
import { useData } from '../../contexts/DataContext'
import { IUser } from '../../types/user.types'
import Emoji from '../emoji/Emoji'

function Input() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState<string>('')
    const [showEmoji, setShowEmoji] = useState<boolean>()
    const [cursorPosition, setCursorPosition] = useState<number>(0)
    const { addData } = useData()

    const path = useLocation().pathname.split('/')[2]

    const pickEmoji = (emoji: EmojiClickData) => {
        const ref = inputRef.current
        ref?.focus()

        const start = message.substring(0, ref?.selectionStart || 0)
        const end = message.substring(ref?.selectionStart || 0)
        const text = start + emoji.emoji + end

        setMessage(text)
        setCursorPosition(start.length + emoji.emoji.length)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            const saveData: IUser = {
                id: Math.floor(Math.random() * 1000000),
                user: path,
                message,
            }
            addData(saveData)
            setMessage('')
        }
    }

    const handleShowEmoji = () => {
        inputRef.current?.focus()
        setShowEmoji(!showEmoji)
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const saveData = {
            user: path,
            message,
        }
        addData(saveData)
        setMessage('')
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.selectionEnd = cursorPosition
        }
    }, [cursorPosition])

    return (
        <div className="mt-2">
            <div className={`absolute bottom-1/4 ${!showEmoji && 'hidden'}`}>
                <Emoji pickEmoji={pickEmoji} />
            </div>

            <div className="flex items-center gap-4 mb-2">
                <div className="uppercase p-2 border-2 border-gray-200 rounded-full text-xs">
                    Request visit
                </div>
                <div className="uppercase p-2 border-2 border-gray-200 rounded-full text-xs">
                    Make offer
                </div>
            </div>
            <div className="flex items-center justify-between gap-3 p-3 border-2 border-gray-200 rounded-md">
                <FontAwesomeIcon
                    icon={faFaceSmile}
                    className="w-4 h-4 text-gray-400"
                    onClick={handleShowEmoji}
                />
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1"
                    ref={inputRef}
                    onChange={handleChange}
                    value={message}
                    onKeyPress={handleKeyPress}
                />
                <input type="file" id="file" className="hidden" />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faFile} />
                </label>
                <button
                    type="submit"
                    className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center"
                    onClick={handleSubmit}
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-white w-2 h-2"
                    />
                </button>
            </div>
        </div>
    )
}

export default Input
