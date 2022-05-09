import StoryFeed from "./feed_components/StoryFeed"

const UserFeed = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grow
        xl:grid-cols-3 xl:max-w-7xl mx-auto pt-1
        ">
            <div className="col-span-2">
                <StoryFeed />
            </div>
            <div>
            </div>
        </div>
    )
}
export default UserFeed
