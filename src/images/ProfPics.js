import React from 'react';
import AdrianPic from './adrian.png';
import KimPic from './kim.png';
import LucasPic from './lucas.jpeg';
import PhillPic from './phill.jpeg';
import TammyPic from './tammy.jpg';

const Adrian = () => {
  return (
    <div>
      <img src={AdrianPic} alt="Adrian Inza-Cruz"/>
    </div>
  );
};

const Kim = () => {
  return (
    <div>
      <img src={KimPic} alt="Kim Chiu"/>
    </div>
  );
};

const Lucas = () => {
  return (
    <div>
      <img src={LucasPic} alt="Lucas Mobley"/>
    </div>
  );
};

const Phillip = () => {
  return (
    <div>
      <img src={PhillPic} alt="Phillip Kekoa Bannister"/>
    </div>
  );
};

const Tammy = () => {
  return (
    <div>
      <img src={TammyPic} alt="Tammy Le"/>
    </div>
  );
};

export default {Adrian, Kim, Lucas, Phillip, Tammy};