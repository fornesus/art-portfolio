import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1 title="Chris Fornesa | Creative/Innovator/UH & HCC alumni/IT Student">Chris Fornesa / CftxP</h1>
        <div id="nav-content">
          <div id="nav-menu">
            <div id="items">
              <div class="nav-menu-item"><a href="index.html">Portfolio</a></div><div class="nav-menu-item"><a href="about.html">About</a></div><div class="nav-menu-item"><a href="resume.html">Resume</a></div><div class="nav-menu-item"><a href="https://php.cftxp.net/contact.php">Contact</a></div>
            </div>
          </div>
          <button class="appointment">
            <a href="https://cftxp.as.me" target="_blank">Schedule Appointment</a>
          </button>
        </div>
        <div id="menu-button">Menu</div>
      </div>
    )
  }
}

export default Header;