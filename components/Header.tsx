import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"


const Header = () => {
    return (
        <div>
            <div className="flex justify-between max-w-7xl">
                <div className="relative w-44 cursor-pointer hidden md:inline-grid">
                    <Image
                        src="/instagram.svg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                    />
                </div>
                <div className="relative cursor-pointer w-10 md:hidden flex-shrink-0">
                    <Image
                        src="/insta-icon.svg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="bg-white rounded-lg"
                    />
                </div>
                <div className="relative mt-1">
                    <div className="flex absolute inset-y-0 pl-2 items-center">
                        <SearchIcon className="h-5 w-5 text-white" />
                    </div>
                    <input type="text" placeholder="Search"
                        className="bg-slate-600 text-white 
                        rounded-lg p-1 block w-full pl-10"
                    />
                </div>
            </div>
        </div>
    )
}
export default Header;
