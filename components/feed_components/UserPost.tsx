import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import Image from "next/image"


const UserPost = (props: any) => {
    return (
        <div className="my-7 bg-slate-900 border-2 border-gray-600 rounded-xl">
            <div className="flex p-2 items-center">
                <div className="userIcon m-2">
                    <Image
                        src={props.userImg ? props.userImg : "/favicon.ico"}
                        alt="userImg"
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                <p className="font-bold flex-1 cursor-pointer">{props.username ? props.username : "loading"}</p>
                <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>
            <div className="relative h-96 bg-black">
                <Image
                    src={props.img}
                    alt="img"
                    layout="fill"
                    className="object-contain"
                />
            </div>
            <div className="flex justify-between p-2">
                <div className="flex space-x-5">
                    <HeartIcon className="userPostBtn" />
                    <ChatIcon className="userPostBtn" />
                    <PaperAirplaneIcon className="userPostBtn" />
                </div>
                <BookmarkIcon className="userPostBtn" />
            </div>
        </div>
    )
}
export default UserPost
