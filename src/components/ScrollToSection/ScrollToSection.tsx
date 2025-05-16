// src/components/ScrollToSection.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ScrollToSection: React.FC = () => {
  const { sectionID } = useParams<{ sectionID: string }>();

  useEffect(() => {
    if (!sectionID) return;

    const interval = setInterval(() => {
      const element = document.getElementById(sectionID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        clearInterval(interval); // зупиняємо опитування
      }
    }, 100); // кожні 100мс перевірка

    return () => clearInterval(interval);
  }, [sectionID]);

  return null; // нічого не рендерить
};

export default ScrollToSection;