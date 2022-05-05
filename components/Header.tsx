import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
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
            <div className="flex justify-between max-w-7xl lg:mx-auto border-b-4 border-gray pb-1 rounded-lg">
                <div className="relative w-[20%] cursor-pointer hidden md:inline-grid">
                    <Image
                        src="/instagram.svg"
                        alt=""
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                <div className="relative cursor-pointer w-10 md:hidden flex-shrink-0">
                    <Image
                        src="/insta-icon.svg"
                        alt=""
                        layout="fill"
                        className="bg-white rounded-lg"
                    />
                </div>
                <div className="max-w-sm">
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 pl-2 items-center">
                            <SearchIcon className="h-5 w-5 text-white" />
                        </div>
                        <input type="text" placeholder="Search"
                            className="bg-slate-600 text-slate-100 
                        rounded-lg p-1 block pl-10 border-2 w-80
                        border-black focus:border-black focus:ring-black"
                        />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <MenuIcon className="w-10 text-white md:hidden" />
                    <HomeIcon className="w-10 text-white hidden md:flex" />
                </div>
            </div>
        </div>
    )
}
export default Header;
