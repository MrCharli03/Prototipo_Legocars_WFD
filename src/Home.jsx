import React, { useState } from 'react';
import { Calendar, Stack, Text, defaultCalendarStrings, List, mergeStyles } from '@fluentui/react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Home.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import CommandBar from './CommandBar';
import Ranking from './Ranking'

const notificationItems = [
  {
    key: '1',
    header: 'Nueva notificación 1',
    content: 'Contenido de la notificación 1',
  },
  {
    key: '2',
    header: 'Nueva notificación 2',
    content: 'Contenido de la notificación 2',
  },
  {
    key: '3',
    header: 'Nueva notificación 3',
    content: 'Contenido de la notificación 3',
  },
  {
    key: '4',
    header: 'Nueva notificación 4',
    content: 'Contenido de la notificación 4',
  },
  {
    key: '5',
    header: 'Nueva notificación 4',
    content: 'Contenido de la notificación 4',
  },
  {
    key: '6',
    header: 'Nueva notificación 4',
    content: 'Contenido de la notificación 4',
  },
  {
    key: '7',
    header: 'Nueva notificación 4',
    content: 'Contenido de la notificación 4',
  },
  {
    key: '8',
    header: 'Nueva notificación 4',
    content: 'Contenido de la notificación 4',
  },
];

const resrevas = [  
  {
    key: '1',
    header: 'Reserva 1',
    content: 'Contenido de la reserva 1',
  },
  {
    key: '2',
    header: 'Reserva 2',
    content: 'Contenido de la reserva 2',
  },
  {
    key: '3',
    header: 'Reserva 3',
    content: 'Contenido de la reserva 3',
  },
  {
    key: '4',
    header: 'Reserva 4',
    content: 'Contenido de la reserva 4',
  },
  {
    key: '5',
    header: 'Reserva 4',
    content: 'Contenido de la reserva 4',
  },
  {
    key: '6',
    header: 'Reserva 4',
    content: 'Contenido de la reserva 4',
  },
  {
    key: '7',
    header: 'Reserva 4',
    content: 'Contenido de la reserva 4',
  },
  {
    key: '8',
    header: 'Reserva 4',
    content: 'Contenido de la reserva 4',
  },
];


const MyCalendar = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Calendar showGoToToday strings={defaultCalendarStrings} />
  </div>
);

function Home () {
  const [isRanking, setIsRanking] = useState(false);

  const handleRanking = () => {
    setIsRanking(true);
  }

  const handleBackToHome = () => {
    setIsRanking(false); // Cambia el estado para volver a la página Home.jsx
  };

  return (
    <div>
      <NavBar/>
      <CommandBar onRanking={handleRanking}/>
      {!isRanking ? (
      <div className='father'>
        <div className='leftC roundedBox1' >
          <Stack tokens={{ childrenGap: 20 }}>
            <Text variant="large">Notificaciones</Text>
            <div className="notificationListContainer">
              <List items={notificationItems} onRenderCell={_onRenderCell} />
            </div>
          </Stack>
        </div>
        <div className='centerC roundedBox1'>
          <Text variant="large">Calendario</Text>
          <MyCalendar/>
        </div>
        <div className='rightC roundedBox1'>
          <Stack tokens={{ childrenGap: 20 }}>
            <Text variant="large">Mis Reservas</Text>
            <div className="notificationListContainer">
              <List items={resrevas} onRenderCell={_onRenderCell} />
            </div>
          </Stack>
        </div>
      </div >
      ) : (
        <Ranking onBack={handleBackToHome} />
      )}
      <Footer/>
    </div>
  );
};

const _onRenderCell = (item) => {
  const listItemStyles = {
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 8,
    marginBottom: 10,
  };

  return (
    <div className={mergeStyles(listItemStyles)}>
      <Text variant="mediumPlus">{item.header}</Text>
      <div style={{ marginTop: 5 }}>
        <Text variant="small">{item.content}</Text>
      </div>
    </div>
  );
};

export default Home;