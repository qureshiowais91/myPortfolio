import { ProjectsSection } from '../components/Section/ProjectsSection';
import Aboutme from '../components/UI/AboutMe/Aboutme';

export const ProjectPage = () => {
  return (
    <div className='flex  justify-center'>
      <Aboutme></Aboutme>
      <div className='basis-1/2'>
        <ProjectsSection></ProjectsSection>
      </div>
    </div>
  );
};
