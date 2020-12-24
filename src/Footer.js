import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render(){
    let date = new Date();
    let year = date.getFullYear();

    return <p><a href="https://www.csf.codes" target="_blank" rel="noopener noreferrer">Chris Fornesa</a> &copy; {year} || This site in: <a href="https://art.php.csf.codes">PHP</a> | <a href="https://art.django.csf.codes">Django</a></p>;
  }
}

export default Footer;
