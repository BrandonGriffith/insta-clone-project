import faker from "@faker-js/faker"
import UserPost from "./UserPost"


let posts = [{
    id: faker.random.numeric(),
    username: faker.name.firstName(),
    userImg: faker.image.avatar(),
    img: faker.image.imageUrl(),
    message: faker.random.words()
}, {
    id: faker.random.numeric(),
    username: faker.name.firstName(),
    userImg: faker.image.avatar(),
    img: faker.image.imageUrl(),
    message: faker.random.words()
},
]
const UserPosts = () => {
    return (
        <div className="text-white">
            {posts.map((post) => (
                <UserPost key={post.id}
                    id={post.id} username={post.username}
                    userImg={post.userImg} img={post.img}
                    message={post.message}
                />
            ))}
        </div>
    )
}
export default UserPosts
