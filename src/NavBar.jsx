import React from 'react';
import { SearchBox } from '@fluentui/react';
import { Image, ImageFit } from '@fluentui/react';
import legoCarImage from './imagenes/logo_solo.png';
import avatar from './imagenes/avatar.png';


const MyLogo = ({ imageUrl }) => (
  <div className="text-with-logo" style={{ display: 'flex', alignItems: 'center' }}>
    <img src={imageUrl} alt="Logo" className="logo" style={{ width: '10%', height: '10%' }} />
    <h3 style={{ color: 'black', marginLeft: '10px' }}>LegoCars</h3>
  </div>
);

const SearchBar = ({ onSearch }) => (
  <div className="searchBarContainer" style={{ display: 'flex', justifyContent: 'center'}}> 
    <SearchBox placeholder="Buscar" onChange={onSearch} />
  </div>
);

const UserProfile = ({ imageUrl }) => (
  <div style={{ marginLeft: 'auto' }}>
    <Image src={imageUrl} imageFit={ImageFit.cover} width={50} height={50} />
  </div>
);

const TopHome = () => {
  const imageUrl = avatar;

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green' }}>
      <MyLogo imageUrl={legoCarImage} />
      <SearchBar />
      <UserProfile imageUrl={imageUrl} />
    </header>
  );
};

export default TopHome;
