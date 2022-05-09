import { DotsHorizontalIcon } from "@heroicons/react/outline"
import Image from "next/image"


const UserPost = (props: any) => {
    return (
        <div className="flex p-2 items-center">
            <div className="userIcon m-2">
                <Image
                    src={props.userImg}
                    alt={props.userImg}
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <p className="font-bold flex-1">{props.username}</p>
            <DotsHorizontalIcon className="h-5" />
        </div>
    )
}
export default UserPost
