import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import './CommandBar.css';

const CommandBar = ({ onRanking }) => {

    const handleSubmit = (e) => {
        onRanking();
    }

  const buttonStyles = {
    root: {
      backgroundColor: '#1B340C',
      color: 'white',
      border: '1px solid black',
      marginRight: '10px',
      borderRadius: '5px', // Añadido para esquinas redondeadas
    },
  };

  return (
    <div className='boxBoutton'>
      <DefaultButton
        type="submit"
        styles={buttonStyles}
        className="inputField"
        onClick={handleSubmit}
      >
        Ranking
      </DefaultButton>
      <DefaultButton
        type="submit"
        styles={buttonStyles}
        className="inputField"
      >
        Mi equipo
      </DefaultButton>
      <DefaultButton
        type="submit"
        styles={buttonStyles}
        className="inputField"
      >
        Reservar Circuito
      </DefaultButton>
      <DefaultButton
        type="submit"
        styles={buttonStyles}
        className="inputField"
      >
        Designar Tripulacion
      </DefaultButton>

    </div>
  );
};

export default CommandBar;
