import React from 'react';
import { Calendar, DayOfWeek } from '@fluentui/react';
import { SearchBox } from '@fluentui/react';
import { Image, ImageFit } from '@fluentui/react';
import NavBar from './NavBar';

const MyCalendar = () => (
  <Calendar showMonthPickerAsOverlay
  highlightSelectedMonth
  showGoToToday={false} styles={{}}/>
);


const Home = () => {
  const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fperfil_4645949&psig=AOvVaw2Q_I0Awjw5G6dt13iNk_We&ust=1701340717926000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMj1g5uC6YIDFQAAAAAdAAAAABAE';

  return (
    <div>
      <NavBar/>
      <MyCalendar/>
    </div>
  );
};

export default Home;
