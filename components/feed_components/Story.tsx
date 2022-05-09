import Image from "next/image"
import { UserProfile } from "../Types"

const Story = (props: UserProfile) => {
    return (
        <div className="text-white">
            <div className="userIcon">
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
