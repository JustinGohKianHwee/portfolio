"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const Links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "education",
        path: "/education"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "about me",
        path: "/aboutme"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

const mobilenav = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <Sheet>
        <SheetTrigger className= "flex justify-center items-center">
            <CiMenuFries className= "text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className = "flex flex-col">
            <div className="mt-32 mb-32 text-center text-2xl">
                <Link href ="/">
                    <h1 className= "text-4xl font-semibold gap-8">
                        Justin<span className= "text-accent">.</span>

                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-5">
                {Links.map((link,index) => {
                    return <Link href= {link.path} key = {index} className = {`${link.path === pathname && 
                    "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default mobilenav
