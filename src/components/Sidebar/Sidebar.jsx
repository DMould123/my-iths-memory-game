import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const sideMenu = [
    {
      title: 'Home',
      path: '/',
      icon: <FaIcons.FaHome />,
      className: 'sidebar-text',
    },
    {
      title: 'About',
      path: '/about',
      icon: <FaIcons.FaInfoCircle />,
      className: 'sidebar-text',
    },
    {
      title: 'Contact Me',
      path: '/contact',
      icon: <FaIcons.FaEnvelope />,
      className: 'sidebar-text',
    },
  ];

  return (
    <>
      <div className="sidebar">
        <Link to="#" className="sidebar-bars">
          {sidebar ? (
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          ) : (
            <FaIcons.FaBars onClick={showSidebar} />
          )}
        </Link>
      </div>
      <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
          </li>
          {sideMenu.map((data, index) => {
            return (
              <li key={index} className={data.name}>
                <Link to={data.path}>
                  <span className="link-icon">
                    {data.icon} {data.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
