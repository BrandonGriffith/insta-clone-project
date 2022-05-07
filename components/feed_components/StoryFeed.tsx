import { useEffect } from "react"
import faker from "faker"


const StoryFeed = () => {
    useEffect(() => {
        const fakeInfo = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        console.log(fakeInfo);
    }, []);

    return (
        <div>
        </div>
    )
}
export default StoryFeed
