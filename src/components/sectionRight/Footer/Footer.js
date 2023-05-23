import React from 'react'
import { NavLink } from 'react-router-dom'
import iconLibrary from "./icon/Library.svg";
import iconLogout from "./icon/Logout.svg";
import iconSetting from "./icon/Setting.svg";
import '../../../styles/components/sectionRight/Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="list">
        <NavLink to='/'>
          <span>مكتبتك</span>
          <div className="icon fo ich">
            <img src={iconLibrary} />
          </div>
        </NavLink>
        <NavLink to='/1'>
          <span>الاعدادات</span>
          <div className="icon fo icso">
            <img src={iconLogout} />
          </div>
        </NavLink>
        <NavLink to='/2'>
          <span>تسجيل الخروج</span>
          <div className="icon fo ics">
            <img src={iconSetting} />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Footer
