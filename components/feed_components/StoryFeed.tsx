import { useEffect, useState } from "react"
import faker from "faker"
import Story from "./Story";
import { UserProfile } from "../Types";


const StoryFeed = () => {
    const [fakeInfo, setFakeInfo] = useState<any>([]);
    useEffect(() => {
        const fakeInfo = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        console.log(fakeInfo);
        setFakeInfo(fakeInfo);
    }, []);

    return (
        <div>
            {fakeInfo.map((profile: UserProfile) =>
                <Story
                    key={profile.id}
                    avatar={profile.avatar}
                    username={profile.username}
                />
            )}
        </div>
    )
}
export default StoryFeed
