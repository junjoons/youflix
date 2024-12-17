import Link from "next/link"
import Image from "next/image"


export default function NavigationBar() {
    return (
    <div className="nav-bar">
        <ul className="nav-bar__ul">
            <li>
                <Link href={"/home"}>
                    <Image 
                        className="nav-bar__logo"
                        src="/images/youflix-logo-2trimmed.png"
                        alt="Youflix Logo"
                        // width={213}
                        // height={86}
                        width={160}
                        height={48}
                    />
                    {/* <h3>LOGO</h3> */}
                </Link>
            </li>
            <li className="nav-bar__test__li">
                <Link href={"/test"}>
                    <h3>TEST</h3>
                </Link>
            </li>
        </ul>
    </div>
    )
}
