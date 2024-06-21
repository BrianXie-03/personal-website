import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"


type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value:SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage,}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-gunmetal" : "text-gunmetal"}
        transition duration-500 hover:text-steel
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link