import React from 'react';
import { SearchBox } from '@fluentui/react';
import { Image, ImageFit } from '@fluentui/react';
import legoCarImage from './imagenes/logo_solo.png';
import avatar from './imagenes/perfil_1.png';
import campana from './imagenes/notificacion.png';
import './NavBar.css';


const MyLogo = ({ imageUrl }) => (
 <div className="text-with-logo" style={{ display: 'flex', alignItems: 'center' }}>
    <img src={imageUrl} alt="Logo" className="logo" style={{ width: '50px', height: '50px' }} />
    <h3 style={{ color: 'black', marginLeft: '10px' }}>LegoCars</h3>
 </div>
);

const SearchBar = ({ onSearch }) => (
 <div className="searchBarContainer" style={{ display: 'flex', justifyContent: 'center'}}> 
    <SearchBox  placeholder="Buscar" onChange={onSearch} />
 </div>
);

const UserProfile = ({ imageUrl }) => (
 <div className="profile" >
    <Image src={imageUrl} imageFit={ImageFit.cover} />
 </div>
);

const Campana = ({ imageUrl }) => (
 <div className="campana" >
    <Image src={imageUrl} imageFit={ImageFit.cover} style={{ width: '70%', height: '70%' }}/>
 </div>
);

const TopHome = () => {
 const imageUrl = avatar;

 return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green' }}>
      <MyLogo imageUrl={legoCarImage} />
      <SearchBar />
      <Campana imageUrl={campana} />
      <UserProfile imageUrl={imageUrl} />
    </header>
 );
};

export default TopHome;