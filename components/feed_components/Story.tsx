import Image from "next/image"
import { UserProfile } from "../Types"

const Story = (props: UserProfile) => {
    return (
        <div className="text-white">
            <Image
                src={props.avatar}
                alt={props.avatar}
                width={40}
                height={40}
            />
            <p>{props.username}</p>
        </div>
    )
}

export default Story
