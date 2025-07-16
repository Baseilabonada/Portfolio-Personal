import React, { useState, useEffect } from 'react';
import './componentstyle.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // يحدث كل ثانية

    return () => clearInterval(timer); // تنظيف عند إزالة المكون
  }, []);

  // تنسيق التاريخ والوقت (بالعربي)
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;