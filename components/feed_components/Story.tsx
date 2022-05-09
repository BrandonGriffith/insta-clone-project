import Image from "next/image"
import { UserProfile } from "../Types"

const Story = (props: UserProfile) => {
    return (
        <div className="text-white">
            <div className="rounded-full cursor-pointer object-contain
                hover:scale-110 transform duration-150 ease-in-out overflow-hidden
                border-2 border-blue-400 w-14 h-14">
                <Image
                    src={props.avatar}
                    alt={props.avatar}
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <p className="text-xs w-14 text-center truncate">{props.username}</p>
        </div>
    )
}
export default Story
