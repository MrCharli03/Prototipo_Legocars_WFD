import React from 'react';
import { Calendar, DayOfWeek, Stack} from '@fluentui/react';
import NavBar from './NavBar';
import Footer from './Footer';
//import CommandBar from './CommandBar';

const MyCalendar = () => (
  <Calendar showMonthPickerAsOverlay
  highlightSelectedMonth
  showGoToToday={false} styles={{}}/>
);


const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <Stack horizontalAlign="center">
        <MyCalendar/>
      </Stack>
      <Footer/>
    </div>
  );
};

export default Home;
