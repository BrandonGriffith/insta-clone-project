import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div>
                <Image
                    src="/instagram.svg"
                    alt=""
                    height={60}
                    width={160}
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Header;
