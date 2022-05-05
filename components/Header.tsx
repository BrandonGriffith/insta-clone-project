import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className="flex justify-between max-w-7xl">
                <div className="relative cursor-pointer hidden md:inline-grid">
                    <Image
                        src="/instagram.svg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                    />
                </div>
                <div className="relative cursor-pointer w-10 h-10 md:hidden flex-shrink-0">
                    <Image
                        src="/insta-icon.svg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="bg-white rounded-lg"
                    />
                </div>
                <div>
                    <div>

                    </div>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}
export default Header;
