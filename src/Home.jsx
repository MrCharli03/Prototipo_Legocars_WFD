import React from 'react';
import { Calendar, DayOfWeek, Stack, Text, defaultCalendarStrings, List, mergeStyles } from '@fluentui/react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Home.css';
//import CommandBar from './CommandBar';

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
];


const MyCalendar = () => (
  <Calendar showGoToToday strings={defaultCalendarStrings} />
);

const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <div className='father'>
        <div className='leftC'>
          <Stack tokens={{ childrenGap: 20 }}>
            <Text variant="large">Notificaciones</Text>
            <div className="notificationListContainer">
              <List items={notificationItems} onRenderCell={_onRenderCell} />
            </div>
          </Stack>
        </div>
        <div className='centerC'>
          <Text variant="large">Calendario</Text>
          <MyCalendar/>
        </div>
        <div className='rightC'>
        <Stack tokens={{ childrenGap: 20 }}>
            <Text variant="large">Mis Reservas</Text>
            <div className="notificationListContainer">
              <List items={resrevas} onRenderCell={_onRenderCell} />
            </div>
          </Stack>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const _onRenderCell = (item) => {
  return (
    <div className={mergeStyles({ padding: 10 })}>
      <Text variant="mediumPlus">{item.header}</Text>
      <Text variant="small">{item.content}</Text>
    </div>
  );
};

export default Home;