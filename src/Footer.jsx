import React from "react";
import { Text } from "@fluentui/react";
import { ComboBox } from '@fluentui/react';
import { Image, ImageFit } from '@fluentui/react';
import legoCarImage from './imagenes/apps.png';
import './Footer.css'

const options = [
  { key: 'A', text: 'Ingles' },
  { key: 'B', text: 'Esukero' },
  { key: 'C', text: 'Español' },
  { key: 'D', text: 'Frances' },
];

const footerContainerStyles = {
  border: '1px solid #ccc',
};

const ComboBoxInlineExample=()=>(
  <div style={footerContainerStyles}>
      <ComboBox
        defaultSelectedKey="C"
        options={options}
        calloutProps={{ doNotLayer: true }}
        styles={{
          root: { width: '90px' }, // Ajusta el ancho total de la ComboBox según sea necesario
          caretDownWrapper: { width: '30px' }, // Ajusta el ancho del botón menos (o controlador)
        }}
      />
    </div>
);

const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="left">
        <div className="parrafo">
          <h2>LEGOCAR</h2>
          <p>Acerca de</p>
          <p>Videos</p>
          <p>Equipos</p>
          <p>Noticias</p>
          <p>Contáctanos</p>
          <p>Política de Privacidad</p>
          <p>Mapa del sitio</p>
        </div>
      </div>
      <div className="center">
        <div className="parrafo">
          <h2>COMUNIDAD</h2>
          <p>Foro Tripulaciones</p>
          <p>Fan Games</p>
          <h2>IDIOMA</h2>
          <ComboBoxInlineExample/>
        </div>
      </div>
      <div className="right" style={{display: 'flex', alignItems: 'center'}}>
        <Image src={legoCarImage} style={{ width: '70%', height: '70%' }}/>
      </div>
      <div className="bottom">
        <Text>© Copyright Legocar 2023</Text>
      </div>
    </div>
  );
};

export default Footer;
