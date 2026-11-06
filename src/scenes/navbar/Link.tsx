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
        className={`${selectedPage === lowerCasePage ? "text-white" : "text-slate-300"} whitespace-nowrap text-sm uppercase tracking-[0.14em] transition duration-300 hover:text-white`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link
