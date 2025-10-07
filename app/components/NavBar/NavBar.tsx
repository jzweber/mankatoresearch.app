import Image from "next/image";
import Link from "next/link";
import {auth, signOut, signIn} from "@/auth";
import GoogleLoginLight from "../../../public/Web (mobile + desktop)/png@3x/light/web_light_rd_ctn@3x.png"
import GoogleLoginDark from "../../../public/Web (mobile + desktop)/png@3x/dark/web_dark_rd_ctn@3x.png"
import GitHubLoginDark from "../../../public/GitHub_Logos/GitHub Logos/PNG/GitHub_Lockup_Dark.png"
import GitHubLoginLight from "../../../public/GitHub_Logos/GitHub Logos/PNG/GitHub_Lockup_Light.png"
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

const NavBar = async () => {
  const session = await auth();

  return (
    <>
      <header className="sticky top-0 bg-white dark:bg-gray-50 border-b-1 border-gray-200 z-50 h-14 flex-shrink-0">
        <nav className="flex justify-between items-center select-none h-full">
          <div className="flex items-baseline">

            {/* Logo and Site Name */}

            <Link href="/"><h4 className="hidden sm:inline whitespace-nowrap italic pl-5 pr-20 text-primary cursor-pointer hover:text-secondary">MANKATO RESEARCH</h4></Link>
            <Link href="/"><p className="sm:hidden whitespace-nowrap font-bold italic pl-5 pr-20 text-primary cursor-pointer hover:text-secondary">MANKATO RESEARCH</p></Link>
            {/* Navigation Links */}

            <ul className="hidden md:flex text-xl font-semibold">
              <li className="hidden lg:block">
                <Link href="/" className="link padding-clamp">Home</Link>
              </li>
              {/* {!session && (
                <li className="block lg:hidden">
                  <Link href="/" className="link padding-clamp">Home</Link>
                </li>
              )} */}
              <li className="block">
                <Link href="/about" className="link padding-clamp">About</Link>
              </li>
              <li className="block">
                <Link href="/contact" className="link padding-clamp">Contact</Link>
              </li>
              {session && session.user && (
                <li className="block">
                  <Link href="/dashboard" className="link padding-clamp">Dashboard</Link>
                </li>
              )}
              {session && session.user && (
                <li className="hidden xl:block">
                  <Link href={`/profile/${session.user?.id}`} className="link padding-clamp">Profile</Link>
                </li>
              )}
            </ul>
          </div>
          
          {/* Authentication Buttons */}

          <div className="hidden xl:flex items-center gap-5 pl-5 pr-5">
            {session && session.user ? (
              <div className="flex gap-7 items-end">
                <Link href={`/profile/${session.user?.id}`} className="pl-10 shrink-0">
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
              </div>
            ) : ( 
              <div className="flex gap-5 align-baseline items-center pt-1 pl-5 pr-5">
                {/* Login Buttons */}
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
              </div>
            )}
          </div>
        </nav>
        <MobileNav session={session}>
          <MobileMenu />
        </MobileNav>
      </header>
    </>
  );
};

export default NavBar;
