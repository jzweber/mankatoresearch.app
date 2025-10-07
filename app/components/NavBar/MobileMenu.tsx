import Image from "next/image";
import Link from "next/link";
import {auth, signOut, signIn} from "@/auth";
import GoogleLoginLight from "../../../public/Web (mobile + desktop)/png@3x/light/web_light_rd_ctn@3x.png"
import GoogleLoginDark from "../../../public/Web (mobile + desktop)/png@3x/dark/web_dark_rd_ctn@3x.png"
import GitHubLoginDark from "../../../public/GitHub_Logos/GitHub Logos/PNG/GitHub_Lockup_Dark.png"
import GitHubLoginLight from "../../../public/GitHub_Logos/GitHub Logos/PNG/GitHub_Lockup_Light.png"

const MobileMenu = async () => {
     const session = await auth();
        return (
            <>
                {/* Mobile Menu */}
                <nav className="sticky w-full sm:w-100 bg-gray-50 z-10 min-h-[calc(100vh-2.5rem)] border-4 border-primary">
                    <ul className="text-center pb-2 px-8 text-gray-700 block font-semibold whitespace-nowrap text-lg">
                    <li className="py-4 mb-8 font-bold border-b-4 border-double">Welcome to Mankato Research</li>
                    <li className="p-4"><Link href="/" className="link padding-clamp w-full border-b-3">Home</Link></li>
                    <li className="p-4"><Link href="/about" className="link padding-clamp w-full border-b-3">About</Link></li>
                    <li className="p-4"><Link href="/contact" className="link padding-clamp w-full border-b-3">Contact</Link></li>
                    {session && session.user && (
                        <li className="p-4"><Link href="/dashboard" className="link padding-clamp w-full border-b-3">Dashboard</Link></li>
                    )}
                    {/* Authentication Buttons */}
                    {session && session.user ? (
                    <li className="flex gap-10 py-10 items-center justify-center">
                        <Link href={`/profile/${session.user?.id}`} className="shrink-0">
                        <Image 
                                        src={session.user?.image ?? "profile-icon.svg"}   
                                        alt="Profile Picture" 
                                        width={40} 
                                        height={40} 
                                        className="rounded-full hover:border-solid hover:border-2 border-black"
                        />
                        </Link> 
                        <form action={async () => {
                                        "use server";   

                                        await signOut({redirectTo: "/"});
                                    }}>
                                    <button type="submit" style={{ cursor: "pointer" }}>
                                    <h6 className="link font-semibold text-xl px-4 mr-3 bg-gray-10 hover:bg-gray-100 hover:font">Logout</h6>
                                </button>
                        </form>
                    </li>
                    ) : ( 
                    <div className="flex gap-5 align-baseline justify-center items-center pt-1 pl-5 pr-5">
                        {/* Login Buttons */}
                        <li>
                        <form action={async () => {
                                        "use server";   

                                        await signIn("google", {redirectTo: "/dashboard"});
                                    }}>
                                    <button type="submit" style={{ cursor: "pointer" }} className="relative hover:opacity-85">
                                        <Image 
                                        src={GoogleLoginLight} 
                                        alt="Login with Google"
                                        width={175} 
                                        height={175}
                                        className="block dark:hidden"
                                        />
                                        <Image 
                                        src={GoogleLoginDark} 
                                        alt="Login with Google"
                                        width={175} 
                                        height={175}
                                        className="hidden dark:block"
                                        />
                                    </button>
                        </form>
                        </li>
                        <li>
                        <form action={async () => {
                                        "use server";

                                        await signIn("github", {redirectTo: "/dashboard"});
                                    }}>
                                    <button type="submit" style={{ cursor: "pointer" }} className="relative hover:opacity-85">
                                        <Image 
                                        src={GitHubLoginDark} 
                                        alt="Login with GitHub" 
                                        width={125} 
                                        height={125}
                                        className="block dark:hidden"
                                        />
                                        <Image 
                                        src={GitHubLoginDark} 
                                        alt="Login with GitHub" 
                                        width={125} 
                                        height={125}
                                        className="hidden dark:block"
                                        />
                                    </button>
                        </form>
                        </li>
                    </div>
                    )}
                </ul>
            </nav>
    </>
);
};

export default MobileMenu;