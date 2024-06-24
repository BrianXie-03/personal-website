import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: string;
    time: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ icon, title, time, description, setSelectedPage }: Props) => {
  return (
    <div className="mt-2 rounded-md border-2 border-gray-100 px-5 py-4 text-center">
        <div className="mb-1 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-2">
                {icon}
            </div>
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="font-bold">{time}</p>
        <p className="my-1 text-sm">{description}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contacts)}
            href={`#${SelectedPage.Contacts}`}
        >

        </AnchorLink>
    </div>
  )
}

export default Experience