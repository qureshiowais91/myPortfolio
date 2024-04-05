import React from 'react';
import { CiHome } from 'react-icons/ci';
import { GrBlog } from 'react-icons/gr';
import { AiFillGithub, AiFillCode } from 'react-icons/ai';
interface IconType {
  icon: React.ReactElement;
  
}

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex-col flex bg-gray-900 text-white shadow-lg'>
      <SideBarIcon icon={<CiHome />} />
      <SideBarIcon icon={<AiFillCode />} />
      <SideBarIcon icon={<AiFillGithub />} />
      <SideBarIcon icon={<GrBlog />} />
    </div>
  );
}

const SideBarIcon: React.FC<IconType> = (props) => (
  <div className='sidebars-icon group'>{props.icon}
   </div>
);

export default Sidebar;
