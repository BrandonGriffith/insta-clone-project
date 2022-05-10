import faker from "@faker-js/faker"
import Image from "next/image"

const SideBar = () => {
    return (
        <div className="text-white flex items-center justify-between">
            <div className="userIcon m-2">
                <Image
                    src={faker.image.avatar()}
                    alt="UserIcon"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div>
                <h1>Guest User</h1>
                <h2>this is an insta clone</h2>
            </div>
            <button>LogOut</button>
        </div>
    )
}
export default SideBar
