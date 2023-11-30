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
    <div className='father'>
      <NavBar/>
      <div >
        <div className='left'>

        </div>
        <div className='center'>
          <MyCalendar/>
        </div>
        <div className='right'>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
