import EmojiPicker from 'emoji-picker-react'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'

function Emoji({
    pickEmoji,
}: {
    pickEmoji: (emoji: EmojiClickData, event: MouseEvent) => void
}) {
    return (
        <div className="w-full max-h-full overflow-y-auto bg-white">
            <EmojiPicker onEmojiClick={pickEmoji} />
        </div>
    )
}

export default Emoji
