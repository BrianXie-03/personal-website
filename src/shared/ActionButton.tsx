import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
    className="rounded-lg bg-outer bg-opacity-40 px-10 py-2 hover:bg-steel hover:text-mint"
    onClick={() => setSelectedPage(SelectedPage.Contacts)}
    href={`#${SelectedPage.Contacts}`}
    >{children}</AnchorLink>
  
  )
}

export default ActionButton