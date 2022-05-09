import { DotsHorizontalIcon } from "@heroicons/react/outline"
import Image from "next/image"


const UserPost = (props: any) => {
    return (
        <div>
            <div className="userIcon">
                <Image
                    src={props.userImg}
                    alt={props.userImg}
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <p>{props.username}</p>
            <DotsHorizontalIcon className="h-5" />
        </div>
    )
}
export default UserPost
