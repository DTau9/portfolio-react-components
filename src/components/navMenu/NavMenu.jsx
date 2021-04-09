import React from 'react';
import './navMenu.css';
import themes from '../../configs/themesToProjects';
import dataProjects from '../../data/dataProjects'

const createList = (el, index) => {
  return (typeof el !== 'string')
    ? <ul key={index}>{el.map((el, index) => createList(el, index))}</ul>
    : <li key={index}>{el}</li>;
}

const NavMenu = ({ onItemMenuClick, currentMenuItem }) => {
  const handleClick = (name) => {
    onItemMenuClick && onItemMenuClick(name)
  }

  const listItem = (
    <div className="projects">
      {
        dataProjects.map((item) => {
          const { name, screenName, annotation } = item;
          const active = (name === currentMenuItem) ? 'projects-item_active' : '';
          return (
            <div
              onClick={() => handleClick(name)}
              key={name}
              className={`projects-item ${active}`}
              data-item={name}
              data-hover={screenName}>
              <div>{screenName}</div>
              <div className="annotation">{annotation}</div>
            </div>
          )
        })
      }
    </div>
  )

  const description = dataProjects.find(item => item.name === currentMenuItem).description;

  const viewDescription = description ?
    <div className="description">
      {createList(description)}
    </div> :
    null;

  return (
    <nav className={`nav-menu ${themes[currentMenuItem]}`}>
      { listItem}
      { viewDescription}
    </nav >
  )
}

export default NavMenu;
