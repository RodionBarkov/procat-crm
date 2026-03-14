import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MenuLeft.module.css';


function MenuLeft(props) {
  return (

    <div className={s.menuLeftUl}>

<MenuItem to="/components/pages/calendar" name='Календарь'/>
<MenuItem to="/components/pages/projects" name='Проекты'/>
<MenuItem to="/components/pages/people" name='Персонал'/>
      <div className={s.link}><a href='#'><li>Транспорт</li></a></div>
      <div className={s.link}><a href='#'><li>Сметы</li></a></div>
      <div className={s.link}><a href='#'><li>Клиенты</li></a></div>
      <div className={s.link}><a href='#'><li>Подрядчики</li></a></div>
      <div className={s.link}><a href='#'><li>Прокаты</li></a></div>
      
    </div>

  );
}

function MenuItem(props) {
  return (

      <NavLink to={props.to} className={({isActive})=> isActive? s.activeLink : 'active'} ><div className={s.link}>{props.name}</div></NavLink>

  );
}

export default MenuLeft;


