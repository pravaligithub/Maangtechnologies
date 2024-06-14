import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Files/AboutPage';
import Courses from './Files/CoursesPage';
import RootLayout from './Files/RootLayout';
import Error from './Files/Error';
import EnglishPage from './Files/English';
import MathsPage from './Files/Maths';
import VerbalPage from './Files/VerbalPage';
import NonVerbalPage from './Files/Nv page';
import Team from './Files/OurTeam';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/english-papers" element={<EnglishPage />} />
          <Route path="/maths-papers" element={<MathsPage />} />
          <Route path="/verbal-papers" element={<VerbalPage />} />
          <Route path="/nonverbal-papers" element={<NonVerbalPage />} />
          <Route path="/team-page" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
