import Sidebar from './SideBar/Sidebar';
import { useState, useEffect, useRef } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
export const Navigation = () => {
  const [isOpen, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const MenuHandler = () => {
    setMenu(() => !isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div
        className='sidebars-icon fixed top-0 left-0  w-16'
        onClick={MenuHandler}
      >
        <CiMenuBurger />
      </div>
      <div className={`${isOpen ? '' : 'hidden'}`}>
        <Sidebar />
      </div>
    </div>
  );
};
