import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import JanusQLLogo from '../../images/JanusQLLogo.png';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => ( 
  <header className="sticky top-0 bg-primary-header shadow"> 
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-gray-700">
        <div className="w-12 mr-3">
          <img src={JanusQLLogo} alt="JanusQL logo" width="100" height="100"></img> 
        </div>
        JanusQL
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Team 
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Download</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
