import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
  <>
      <div className="title-bar">
        <div className="title-text">
          <h1>Események</h1>
        
        </div>
      </div>
    <div className="calendar-wrapper">
     
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=valami@gmail.com&ctz=Europe/Budapest"
          title="Google Calendar"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="600"
          className="google-calendar-iframe"
        />
      </div>
    </div>
    </>
  );
};

export default Calendar;
