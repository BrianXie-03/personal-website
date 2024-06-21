import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import PersonalPhoto from "@/assets/PersonalPhoto.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:py-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            {/* <div> */}
              <div className="text-lg">
                <p>THIS IS THE MAIN TEXT</p>
              </div>
            {/* </div> */}
            <p className="mt-8 text-md">
              THIS IS THE SMALLER TEXT PART
            </p>
          </div>
          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8" >
            <ActionButton setSelectedPage={setSelectedPage}>
              Github
            </ActionButton>
            <ActionButton setSelectedPage={setSelectedPage}>
              Linkdln
            </ActionButton>
          </div>

        </div>
        {/* IMAGE */}
        <div className="flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-personal" src={PersonalPhoto}/>
        </div>
      </div>
      {/* Sp */}
      
    </section>
  )
}

export default Home;