import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
// import Logo from "@/assets/Logo.png"
type Props = {
    selectedPage: string;
    setSelectedPage: (value:string) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    // SPACING NAVBAR
    const flexBetween = "flex item-center justify-between";
    
    return <nav>
        {/* MAIN  */}
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-10`}>
            {/* INNER PORTION */}
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* <img alt = "logo" src = {Logo} /> */}
                
                    {/* RIGHT SIDE */}
                    <div className={`${flexBetween} w-full`}>
                        {/* INNER LEFT OF RIGHT */}
                        <div className={`${flexBetween} mx-right gap-20 text-lg`}>
                            <p>Brian Xie</p>
                        </div>
                        {/* INNER RIGHT OF RIGHT */}
                        <div className={`${flexBetween} gap-10 text-lg `}>
                            <Link page = "About Me"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                            <Link page = "Experiences"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                            <Link page = "Skills"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                            <Link page = "Projects"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                            <Link page = "Contacts"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
};

export default Navbar;