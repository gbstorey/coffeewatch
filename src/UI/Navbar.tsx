import Link from "next/link";
import LogoSVG from "../assets/LogoSVG";
import HamburgerSVG from "../assets/HamburgerSVG";
import * as React from "react";
import {useState} from "react";

export default function Navbar () {
    const [isDroppedDown, setDroppedDown] = useState(false)
    const dropdownHandler = () => {
        setDroppedDown(prevState => {
            return !prevState
        })
    }
    return (
        <nav className="flex items-center justify-end sm:justify-between flex-wrap px-4 bg-cw_brown py-6 text-cw_tan fill-cw_tan">
            <div className="flex-1 items-center flex-shrink-0 invisible sm:visible">
                <LogoSVG className={"w-24"}/>
            </div>
            <div className="absolute top-10 left-24 sm:left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href={"/"}><span className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">CoffeeWatch</span></Link>
            </div>
            <div className={"block"}>
                <button onClick={dropdownHandler}>
                    <HamburgerSVG width={35}/>
                </button>
            </div>
            {isDroppedDown ?
                <div className="block w-full flex-grow text-center text-md sm:text-l md:text-xl pt-2 px-0">
                <div className="lg:flex-grow m-0">
                    <div className={"hover:border hover:border-cw_tan"}>
                        <a href="#" className="block m-2 lg:inline-block lg:mt-0 hover:text-cw_orange">
                            About Us
                        </a>
                    </div>
                    <div className={"hover:border hover:border-cw_tan py-1"}>
                        <a href="#" className="block m-2 lg:inline-block lg:mt-0 hover:text-cw_orange">
                            Contact Us
                        </a>
                    </div>
                    <div className={"hover:border hover:border-cw_tan"}>
                        <a href="#" className="block m-2 lg:inline-block lg:mt-0 hover:text-cw_orange">
                            Post a Review
                        </a>
                    </div>
                </div>
            </div> : <></>}
        </nav>
    )
}