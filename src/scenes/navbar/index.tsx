import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
import { b } from "@/assets/images";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    {/* SPACING NAVBAR */}
    const flexBetween = "flex item-center justify-between";
    const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-lighter drop-shadow"
    
    return <nav>
        {/* MAIN  */}
        <div className={`${navbarBackground}${flexBetween} rounded-md fixed top-0 z-30 w-full py-10 shadow-md`}>
            {/* INNER PORTION */}
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <div className={`${flexBetween} w-full `}>
                    <div className={`${flexBetween} mx-left gap-4 text-lg font-bold`}>
                        <div className={`flex items-center gap-1 whitespace-nowrap`}>
                            <img alt="logo" src={b} className="w-[30px] "/>
                            <Link page = "Brian Xie"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                        </div>
                    </div>
                </div>
                
                {/* RIGHT SIDE */}
                <div className={`${flexBetween} w-full`}>
                    {/* INNER LEFT OF RIGHT */}
                    <div className={`${flexBetween} mx-right gap-20 text-lg`}>

                    </div>
                    {/* INNER RIGHT OF RIGHT */}
                    {isAboveMediumScreens ? (
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
                    </div>) : (
                        <button className="rounded-full bg-steel p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}
                </div>
            </div>
            {/* </div> */}
        </div>
        {/* MOBILE MENU MODAL*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-lighter drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className= "h-6 w-6 text-gray-400"></XMarkIcon>
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
        )}

    </nav>;
};

export default Navbar;