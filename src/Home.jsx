import React from 'react';
import { Calendar, DayOfWeek, Stack, Text, defaultCalendarStrings} from '@fluentui/react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Home.css';
//import CommandBar from './CommandBar';



const MyCalendar = () => (
  <Calendar
        showGoToToday
        strings={defaultCalendarStrings}/>
);


const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <div className='father'>
        <div className='leftC'>
          <Text>Primera columna</Text>
        </div>
        <div className='centerC'>
          <MyCalendar/>
        </div>
        <div className='rightC'>
          <Text>Tercera columna</Text>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
