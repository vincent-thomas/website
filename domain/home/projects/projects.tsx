import { Link, Text, Title } from "lib/components";
import { MaxWidthLayout } from "lib/layouts";
import { GatekeeperProject } from "./entries/gatekeeper";
import { IsTheWebUpProject } from "./entries/isthewebup";
import { ProjectPureForms } from "./entries/pureforms";
import { ProjectShorter } from "./entries/shorter";

export const ProjectsView = () => {
  return (
    <>
      <div
        className={`h-[140px] bg-accent outline outline-y-2 outline-text`}
      ></div>
      <div className='border-y-2 border-text py-8 flex flex-col'>
        <MaxWidthLayout>
          <div className='flex justify-between items-center'>
            <div>
              <Title size='medium'>Projects</Title>
              <Text className='max-w-[20ch]'>
                Here are choosen projects i’ve been working on lately. Hope you
                like them!
              </Text>
            </div>
            <Link to='/projects' type='not-styled'>
              See all Projects
            </Link>
          </div>
        </MaxWidthLayout>
      </div>
      <MaxWidthLayout>
        <div className='grid md:grid-cols-[1fr,1fr] gap-space my-space max-w-[1000px] mx-auto'>
          <div className='gap-space grid md:grid-rows-[1fr,40%] md:h-[35rem] relative md:left-0 md:w-[90%]'>
            <ProjectPureForms />
            <ProjectShorter />
          </div>
          <div className='gap-space grid md:grid-rows-[1fr,55%] md:h-[35rem]'>
            <IsTheWebUpProject />
            <GatekeeperProject />
          </div>
        </div>
      </MaxWidthLayout>
    </>
  );
};
// </MaxWidthLayout>
