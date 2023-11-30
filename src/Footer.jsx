import React from "react";
import { Stack, Text } from "@fluentui/react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="left">
        <Text>Primera columna de texto</Text>
      </div>
      <div className="center">
        <Text>Segunda columna de texto</Text>
      </div>
      <div className="right">
      <Text>Tercera columna de texto</Text>
      </div>
    </div>
    
  );
};

export default Footer;