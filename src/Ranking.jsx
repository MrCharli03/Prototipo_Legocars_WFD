import React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

const Ranking = ({ onBack }) => {
  const handleBack = () => {
    onBack(); // Llama a la función onBack pasada como prop desde Home.jsx
  };

  return (
    <div>
      <h1>RANKING</h1>
      <DefaultButton
        onClick={handleBack}
      >Volver Atras</DefaultButton>
      {/* Resto del contenido de tu componente Ranking */}
    </div>
  );
};

export default Ranking;
