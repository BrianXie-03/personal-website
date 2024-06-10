import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
// import Logo from "@/assets/Logo.png"
type Props = {};

const Navbar = (props: Props) => {
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
                        <div className={`${flexBetween} gap-10 text-lg`}>
                            <p>About Me</p>
                            <p>Experiences</p>
                            <p>Skills</p>
                            <p>Projects</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
};

export default Navbar;