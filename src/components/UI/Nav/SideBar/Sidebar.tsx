import React from 'react';
import { CiHome } from 'react-icons/ci';
import { GrBlog } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

// import {AiFillCode} from 'react/ai';

interface IconType {
  icon: React.ReactElement;
}

import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex-col flex bg-gray-900 text-white shadow-lg'>
      <NavLink to='/Home'>
        <SideBarIcon icon={<CiHome />} />
      </NavLink>
      {/* <SideBarIcon icon={<AiFillCode />} /> */}
      <NavLink to='/Project'>
        <SideBarIcon icon={<AiFillGithub />} />
      </NavLink>
      <NavLink to='Blog'>
        <SideBarIcon icon={<GrBlog />} />
      </NavLink>
    </div>
  );
}

const SideBarIcon: React.FC<IconType> = (props) => (
  <div className='sidebars-icon group'>{props.icon}</div>
);

export default Sidebar;
