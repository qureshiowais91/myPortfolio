import { ProjectsSection } from '../components/Section/ProjectsSection';
import Aboutme from '../components/UI/AboutMe/Aboutme';

export const ProjectPage = () => {
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center'>
      <div className='row-span-3 '>
        <Aboutme></Aboutme>
      </div>
      <div className='row-span-3'>
        <ProjectsSection></ProjectsSection>
      </div>
    </div>
  );
};
