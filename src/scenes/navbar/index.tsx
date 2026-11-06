import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "bg-[#0b1014]/80 backdrop-blur-sm" : "bg-[#121b22]/90 backdrop-blur-sm"
    
    return <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full border-b border-white/10 py-4`}>
            <div className={`${flexBetween} mx-auto w-[min(100%,72rem)] px-4 md:px-0`}>
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-4 text-lg font-medium`}>
                        <div className="flex items-center whitespace-nowrap">
                            <Link page = "Brian Xie"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                        </div>
                    </div>
                </div>
                
                <div className={`${flexBetween} w-full justify-end`}>
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page = "About Me"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                        />
                        <Link page = "Education"
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
                        <button className="rounded-full border border-white/10 bg-white/5 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-5 w-5 text-white"/>
                        </button>
                    )}
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[280px] border-l border-white/10 bg-[#1b262c] p-8 shadow-2xl">
                <div className="flex justify-end">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className= "h-6 w-6 text-slate-300"></XMarkIcon>
                    </button>
                </div>
                <div className="mt-12 flex flex-col gap-8 text-lg">
                            <Link page = "About Me"
                                  selectedPage = {selectedPage}
                                  setSelectedPage = {setSelectedPage}
                            />
                            <Link page = "Education"
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
