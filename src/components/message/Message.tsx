import avatar from '../../assets/img/avatar.jpg'

function Message() {
    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold">Gold Coast</h3>
                <span>From: Hali</span>
            </div>
            <hr className="my-3 mx-0 border-gray-300" />
            <div className="mt-5">
                <div className="flex flex-col">
                    <div className="w-1/2 flex items-center justify-start gap-2">
                        <img
                            src={avatar}
                            className="rounded-full object-cover w-12 h-12"
                            alt="loading..."
                        />
                        <div className="bg-gray-400 rounded-full">
                            <p className="p-3">
                                We invite you at our office for visit
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="w-1/2 flex justify-end">
                            <div className="bg-blue-400 rounded-full">
                                <p className="p-3">
                                    We invite you at our office for visit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
