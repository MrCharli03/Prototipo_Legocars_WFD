import React from 'react';
import { DefaultButton} from '@fluentui/react/lib/Button';
import { mergeStyles, Stack, List } from '@fluentui/react';
import './Ranking.css'
import imagen from './imagenes/imagen_logo.png'

const equipo = [
  {
    key: '1',
    header: '#1',
    content: 'Equipo 1',
    Image: imagen
  },
  {
    key: '2',
    header: '#2',
    content: 'Equipo 2',
    Image: imagen
  },
  {
    key: '3',
    header: '#3',
    content: 'Equipo 3',
    Image: imagen
  },
  {
    key: '4',
    header: '#4',
    content: 'Equipo 4',
    Image: imagen
  },
  {
    key: '5',
    header: '#5',
    content: 'Equipo 5',
    Image: imagen
  },  
  {
    key: '6',
    header: '#6',
    content: 'Equipo 6',
    Image: imagen
  },
  {
    key: '7',
    header: '#7',
    content: 'Equipo 7',
    Image: imagen
  },  
  {
    key: '8',
    header: '#8',
    content: 'Equipo 8',
    Image: imagen
  },
  {
    key: '9',
    header: '#9',
    content: 'Equipo 9',
    Image: imagen
  }  
]

const Ranking = ({ onBack }) => {
  const handleBack = () => {
    onBack(); // Llama a la función onBack pasada como prop desde Home.jsx
  };

  return (
    
    <div className='padre'>
      <div className='boton'>
        <DefaultButton
          onClick={handleBack}
        >Volver Atras
        </DefaultButton>
      </div>
      <div className='ranking'>
        <Stack tokens={{ childrenGap: 20 }}>
          <h1>Ranking</h1>
          <div className="notificationListContainer">
             <List items={equipo} onRenderCell={_onRenderCell} />
          </div>
        </Stack>
      </div>
    </div>
  );
};

const _onRenderCell = (item) => {
  const listItemStyles = {
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 8,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const imageStyles = {
    width: 100,
    height: 50,
    marginRight: 20, // Ajusta el margen derecho para separar la imagen
  };
  

  const contentStyles = {
    marginRight: 20, // Añade un margen derecho al texto
    display: 'flex',
    alignItems: 'center',
    marginLeft: 250
  };

  return (
    <div className={mergeStyles(listItemStyles)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', marginRight: 10 }}>{item.header}</span>
        <div style={contentStyles}>
          <p>{item.content}</p>
        </div>
      </div>
      <img src={item.Image} alt="Equipo Logo" style={imageStyles} />
    </div>
  );
};


export default Ranking;
