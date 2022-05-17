import faker from "@faker-js/faker";
import { useEffect, useState } from "react"
import { UserProfile } from "./Types";

const UserRecommended = () => {
    const [recom, setRecom] = useState<any>([]);
    useEffect(() => {
        const recom = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard,
                id: i
            }
        ));
        setRecom(recom);
    }, [])
    return (
        <div className="mt-8 text-blue-200 font-bold">
            <div className="flex justify-between">
                <h2>
                    Recommended Users
                </h2>
                <button className="text-blue-300
                hover:text-white hover:scale-110">
                    See More
                </button>
            </div>
            {
                recom.map((profile: UserProfile) => (
                    <div key={profile.id}>

                    </div>
                ))
            }
        </div>
    )
}
export default UserRecommended
