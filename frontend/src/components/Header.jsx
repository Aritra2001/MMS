import Logo from '../assets/meet_logo.svg';
import React from "react";
import { PiClockCountdownFill } from "react-icons/pi";

function Header() {

    const date = new Date();
    const Day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

  return (
    <header>
      <div className='full_logo'>
      <img
        src={Logo}
        alt="Zing"
        width={60}
      />
      <h2>Zing</h2>
      </div>
      <div className='time'>
        <PiClockCountdownFill size={22} />
        {formatAMPM(date)+' '+'. '+Day[date.getDay()]+' '+','+ ' '+Months[date.getMonth()]+' '+ ' '+date.getDate()}
      </div>
    </header>
  );
}

export default Header;