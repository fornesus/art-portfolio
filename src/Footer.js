import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render(){
    let date = new Date();
    let year = date.getFullYear();

    return <p><a href="https://www.chrisfornesa.com" target="_blank" rel="noopener noreferrer">Chris Fornesa</a> &copy; {year} || <a href="https://art.php.chrisfornesa.com">This site in PHP</a></p>;
  }
}

export default Footer;
